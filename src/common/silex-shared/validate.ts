import * as Ajv from "ajv";
import { assign, isObject, toPath } from "lodash";
import { ErrorHandlerMore, ICoreMetaSchema, IError, IErrorHandler } from "./types";
import { mergeObjects } from "./utils";

const ajv = new Ajv({
    allErrors: true,
    errorDataPath: "property",
    multipleOfPrecision: 8,
});
// add custom formats
ajv.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
ajv.addFormat(
    "color",
    /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
);

function toErrorSchema(errors: IError[]): unknown {
    // Transforms a ajv validation errors list:
    // [
    //   {property: ".level1.level2[2].level3", message: "err a"},
    //   {property: ".level1.level2[2].level3", message: "err b"},
    //   {property: ".level1.level2[4].level3", message: "err b"},
    // ]
    // Into an error tree:
    // {
    //   level1: {
    //     level2: {
    //       2: {level3: {errors: ["err a", "err b"]}},
    //       4: {level3: {errors: ["err b"]}},
    //     }
    //   }
    // };
    if (!errors.length) {
        return {};
    }
    return errors.reduce((errorSchema, error) => {
        const { property, message } = error;
        const path = toPath(property);
        let parent = errorSchema as IError;

        // If the property is at the root (.level1) then toPath creates
        // an empty array element at the first index. Remove it.
        if (path.length > 0 && path[0] === "") {
            path.splice(0, 1);
        }

        for (const segment of path.slice(0)) {
            if (!(segment in parent)) {
                parent[segment] = {};
            }
            parent = parent[segment];
        }
        if (Array.isArray(parent.__errors)) {
            // We store the list of errors for this node in a property named __errors
            // to avoid name collision with a possible sub schema field named
            // "errors" (see `validate.createErrorHandler`).
            parent.__errors = parent.__errors.concat(message);
        } else {
            parent.__errors = [message];
        }
        return errorSchema;
    }, {});
}

export function toErrorList(errorSchema, fieldName = "root") {
    // XXX: We should transform fieldName as a full field path string.
    let errorList = [];
    if ("__errors" in errorSchema) {
        errorList = errorList.concat(
            errorSchema.__errors.map((stack) => {
                return {
                    stack: `${fieldName}: ${stack}`,
                };
            }),
        );
    }
    return Object.keys(errorSchema).reduce((acc, key) => {
        if (key !== "__errors") {
            acc = acc.concat(toErrorList(errorSchema[key], key));
        }
        return acc;
    }, errorList);
}

function createErrorHandler<T>(formData: T): ErrorHandlerMore<T> {
    const handler: IErrorHandler = {
        // We store the list of errors for this node in a property named __errors
        // to avoid name collision with a possible sub schema field named
        // "errors" (see `silex-shared.toErrorSchema`).
        __errors: [],
        addError(message: string) {
            this.__errors.push(message);
        },
    };
    if (isObject(formData)) {
        return Object.keys(formData).reduce(
            (acc, key) => {
                return assign({}, acc, {
                    [key]: createErrorHandler(formData[key]),
                });
            },
            handler as ErrorHandlerMore<T>,
        );
    }
    if (Array.isArray(formData)) {
        return formData.reduce((acc, value, key) => {
            return { ...acc, [key]: createErrorHandler(value) };
        }, handler);
    }
    return handler as ErrorHandlerMore<T>;
}

function unwrapErrorHandler(errorHandler: IErrorHandler) {
    return Object.keys(errorHandler).reduce((acc, key) => {
        if (key === "addError") {
            return acc;
        } else if (key === "__errors") {
            return { ...acc, [key]: errorHandler[key] };
        }
        return { ...acc, [key]: unwrapErrorHandler(errorHandler[key]) };
    }, {});
}

/**
 * Transforming the error output from ajv to format used by jsonschema.
 * At some point, components should be updated to support ajv.
 */
function transformAjvErrors(errors: Ajv.ErrorObject[] | null = []): IError[] {
    if (errors === null) {
        return [];
    }

    return errors.map((e: any) => {
        const { dataPath, keyword, message, params } = e;
        const property = `${dataPath}`;

        // put datas in expected format
        return {
            message,
            name: keyword,
            params, // specific to ajv
            property,
            stack: `${property} ${message}`.trim(),
        };
    });
}

/**
 * This function processes the formData with a user `validate` contributed
 * function, which receives the form datas and an `errorHandler` object that
 * will be used to add custom validation errors for each field.
 */
export default function validateFormData<T = any>(
    formData: T,
    schema: ICoreMetaSchema,
    customValidate?: (formData: T, errorHandler: ErrorHandlerMore<T>) => IErrorHandler,
    transformErrors?: (error: IError[]) => IError[],
): {
    errors: IError[];
    errorSchema: any;
} {
    try {
        ajv.validate(schema, formData);
    } catch (e) {
        // swallow errors thrown in ajv due to invalid schemas, these
        // still get displayed
    }

    let errors = transformAjvErrors(ajv.errors);

    if (typeof transformErrors === "function") {
        errors = transformErrors(errors);
    }
    const errorSchema = toErrorSchema(errors);

    if (typeof customValidate !== "function") {
        return { errors, errorSchema };
    }

    const errorHandler = customValidate(formData, createErrorHandler(formData));
    const userErrorSchema = unwrapErrorHandler(errorHandler);
    const newErrorSchema = mergeObjects(errorSchema, userErrorSchema, true);
    // XXX: The errors list produced is not fully compliant with the format
    // exposed by the jsonschema lib, which contains full field paths and other
    // properties.
    const newErrors = toErrorList(newErrorSchema);

    return { errors: newErrors, errorSchema: newErrorSchema };
}
