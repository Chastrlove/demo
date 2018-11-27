import * as React from "react";
import {
    getSchemaType,
    getUiOptions,
    isFilesArray,
    isMultiSelect,
    mergeObjects,
    retrieveSchema,
    toIdSchema,
    deepEquals,
} from "silex-shared/utils";
import { IFieldProps } from "silex-form-core/types";
import UnsupportedField from "./UnsupportedField";

const COMPONENT_TYPES = {
    array: "ArrayField",
    boolean: "BooleanField",
    integer: "NumberField",
    number: "NumberField",
    object: "ObjectField",
    string: "StringField",
};

function getFieldComponent(schema, uiSchema, idSchema, fields) {
    const field = uiSchema["ui$field"];
    if (typeof field === "function") {
        return field;
    }
    if (typeof field === "string" && field in fields) {
        return fields[field];
    }

    const componentName = COMPONENT_TYPES[getSchemaType(schema) as string];
    return componentName in fields
        ? fields[componentName]
        : () => {
              return (
                  <UnsupportedField
                      schema={schema}
                      idSchema={idSchema}
                      reason={`Unknown field type ${schema.type}`}
                  />
              );
          };
}

function Help(props) {
    const { help } = props;
    if (!help) {
        // See #312: Ensure compatibility with old versions of React.
        return <div />;
    }
    if (typeof help === "string") {
        return <p className="help-block">{help}</p>;
    }
    return <div className="help-block">{help}</div>;
}

function ErrorList(props) {
    const { errors = [] } = props;
    if (errors.length === 0) {
        return <div />;
    }
    return (
        <div>
            <p />
            <ul className="error-detail bs-callout bs-callout-info">
                {errors.map((error, index) => {
                    return (
                        <li className="text-danger" key={index}>
                            {error}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function SchemaFieldRender(props) {
    const {
        uiSchema,
        formData,
        errorSchema,
        idPrefix,
        name,
        onKeyChange,
        required,
        registry,
    } = props;
    const { definitions, fields, formContext, FieldTemplate } = registry;
    let idSchema = props.idSchema;
    const schema = retrieveSchema(props.schema, definitions, formData);
    idSchema = mergeObjects(toIdSchema(schema, null, definitions, formData, idPrefix), idSchema);
    const FieldComponent = getFieldComponent(schema, uiSchema, idSchema, fields);
    const { DescriptionField } = fields;
    const disabled = Boolean(props.disabled || uiSchema["ui$disabled"]);
    const readonly = Boolean(props.readonly || uiSchema["ui$readonly"]);
    const autofocus = Boolean(props.autofocus || uiSchema["ui$autofocus"]);

    if (Object.keys(schema).length === 0) {
        // See #312: Ensure compatibility with old versions of React.
        return <div />;
    }

    const uiOptions = getUiOptions(uiSchema);
    let { label: displayLabel = true } = uiOptions;
    if (schema.type === "array") {
        displayLabel =
            isMultiSelect(schema, definitions) || isFilesArray(schema, uiSchema, definitions);
    }
    if (schema.type === "object") {
        displayLabel = false;
    }

    if (schema.type === "boolean" && !uiSchema["ui$widget"]) {
        displayLabel = true;
    }

    if (uiSchema["ui$field"]) {
        displayLabel = false;
    }

    const { __errors, ...fieldErrorSchema } = errorSchema;

    // See #439: uiSchema: Don't pass consumed class names to child components
    const field = (
        <FieldComponent
            {...props}
            idSchema={idSchema}
            schema={schema}
            uiSchema={{ ...uiSchema, classNames: undefined }}
            disabled={disabled}
            readonly={readonly}
            autofocus={autofocus}
            errorSchema={fieldErrorSchema}
            formContext={formContext}
            rawErrors={__errors}
        />
    );

    const { type } = schema;
    const id = idSchema.$id;
    const label = uiSchema["ui$title"] || props.schema.title || schema.title || name;
    const description =
        uiSchema["ui$description"] || props.schema.description || schema.description;
    const errors = __errors;
    const help = uiSchema["ui$help"];
    const hidden = uiSchema["ui$widget"] === "hidden";
    const classNames = [
        "form-group",
        "field",
        `field-${type}`,
        errors && errors.length > 0 ? "field-error has-error has-danger" : "",
        uiSchema.classNames,
    ]
        .join(" ")
        .trim();

    const fieldProps: IFieldProps = {
        description: (
            <DescriptionField
                id={id + "__description"}
                description={description}
                formContext={formContext}
            />
        ),
        rawDescription: description,
        help: <Help help={help} />,
        rawHelp: typeof help === "string" ? help : undefined,
        errors: <ErrorList errors={errors} />,
        rawErrors: errors,
        id,
        label,
        hidden,
        onKeyChange,
        required,
        disabled,
        readonly,
        displayLabel,
        classNames,
        formContext,
        fields,
        schema,
        uiSchema,
    };

    return <FieldTemplate {...fieldProps}>{field}</FieldTemplate>;
}

class SchemaField extends React.Component<any> {
    public static defaultProps = {
        uiSchema: {},
        errorSchema: {},
        idSchema: {},
        disabled: false,
        readonly: false,
        autofocus: false,
    };

    public shouldComponentUpdate(nextProps, nextState) {
        // if schemas are equal idSchemas will be equal as well,
        // so it is not necessary to compare
        return !deepEquals(
            { ...this.props, idSchema: undefined },
            { ...nextProps, idSchema: undefined },
        );
    }

    public render() {
        return SchemaFieldRender(this.props);
    }
}

export default SchemaField;
