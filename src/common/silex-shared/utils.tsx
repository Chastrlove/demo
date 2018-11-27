import { fill, isPlainObject, isArrayLike } from "lodash";
import * as React from "react";
import * as reactFastCompare from "react-fast-compare";
import {
  ICoreMetaSchema,
  IDefinitions,
  IOptionsList,
  IRangeSpec,
  IRegisteredWidgets,
  IUISchema,
  IUISchemaObject,
  IURIBlob,
  SimpleTypes,
  WidgetType,
} from "./types";
import validateFormData from "./validate";
import { ID_PLACEHOLDER } from "silex-form-core/const";

export const deepEquals = reactFastCompare;

export const ADDITIONAL_PROPERTY_FLAG = "__additional_property";

const widgetMap = {
  boolean: {
    checkbox: "CheckboxWidget",
    hidden: "HiddenWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
  },
  string: {
    text: "TextWidget",
    password: "PasswordWidget",
    email: "EmailWidget",
    hostname: "TextWidget",
    ipv4: "TextWidget",
    ipv6: "TextWidget",
    uri: "URLWidget",
    "uri-reference": "TextWidget",
    "data-url": "FileWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    textarea: "TextareaWidget",
    hidden: "HiddenWidget",
    date: "DateWidget",
    datetime: "DateTimeWidget",
    "date-time": "DateTimeWidget",
    "alt-date": "AltDateWidget",
    "alt-datetime": "AltDateTimeWidget",
    color: "ColorWidget",
    file: "FileWidget",
    whiteSpace: "WhiteSpaceWidget",
  },
  number: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget",
  },
  integer: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget",
  },
  array: {
    checkboxes: "CheckboxesWidget",
    select: "SelectWidget",
    files: "FileWidget",
  },
};

export function getSchemaType(schema: ICoreMetaSchema): string | SimpleTypes[] {
  let { type = SimpleTypes.String } = schema;
  if (!type && schema.enum) {
    type = "string";
  }
  return type;
}

export function getWidget(
  schema: ICoreMetaSchema,
  widget: WidgetType | string,
  registeredWidgets: IRegisteredWidgets = {},
) {
  const type = getSchemaType(schema);

  function mergeOptions(Widget) {
    // cache return value as property of widget for proper react reconciliation
    if (!Widget.MergedWidget) {
      const defaultOptions = (Widget.defaultProps && Widget.defaultProps.options) || {};
      Widget.MergedWidget = ({ options = {}, ...props }) => (
        <Widget options={{ ...defaultOptions, ...options }} {...props} />
      );
    }
    return Widget.MergedWidget;
  }

  if (typeof widget === "function") {
    return mergeOptions(widget);
  }

  if (typeof widget !== "string") {
    throw new Error(`Unsupported widget definition: ${typeof widget}`);
  }

  if (registeredWidgets.hasOwnProperty(widget)) {
    const registeredWidget = registeredWidgets[widget];
    return getWidget(schema, registeredWidget, registeredWidgets);
  }

  if (!widgetMap.hasOwnProperty(type as string)) {
    throw new Error(`No widget for type "${type}"`);
  }

  if (widgetMap[type as string].hasOwnProperty(widget)) {
    const registeredWidget = registeredWidgets[widgetMap[type as string][widget]];
    return getWidget(schema, registeredWidget, registeredWidgets);
  }

  throw new Error(`No widget "${widget}" for type "${type}"`);
}

function computeDefaults(
  schema: ICoreMetaSchema = {},
  parentDefaults?: any,
  definitions: IDefinitions = {},
) {
  // Compute the defaults recursively: give highest priority to deepest nodes.
  let defaults = parentDefaults;
  if (isPlainObject(defaults) && isPlainObject((schema as ICoreMetaSchema).default)) {
    // For object defaults, only override parent defaults that are defined in
    // schema.default.
    defaults = mergeObjects(defaults, (schema as ICoreMetaSchema).default);
  } else if ("default" in schema) {
    // Use schema defaults for this node.
    defaults = schema.default;
  } else if ("$ref" in schema) {
    // Use referenced schema defaults for this node.
    const refSchema = findSchemaDefinition(schema.$ref, definitions);
    return computeDefaults(refSchema, defaults, definitions);
  } else if (isFixedItems(schema)) {
    defaults =
      schema.items && Array.isArray(schema.items)
        ? schema.items.map((itemSchema) => computeDefaults(itemSchema, undefined, definitions))
        : [];
  }
  // Not defaults defined for this node, fallback to generic typed ones.
  if (typeof defaults === "undefined") {
    defaults = schema.default;
  }

  switch (schema.type) {
    // We need to recur for object schema inner default values.
    case "object":
      return Object.keys(schema.properties || {}).reduce((acc, key) => {
        // Compute the defaults for this node, with the parent defaults we might
        // have from a previous run: defaults[key].
        acc[key] = computeDefaults(
          schema.properties ? schema.properties[key] : {},
          (defaults || {})[key],
          definitions,
        );
        return acc;
      }, {});

    case "array":
      if (schema.minItems) {
        if (!isMultiSelect(schema, definitions)) {
          const defaultsLength = defaults ? defaults.length : 0;
          if (schema.minItems > defaultsLength) {
            const defaultEntries = defaults || [];
            const items = schema.items as ICoreMetaSchema;
            // populate the array with the defaults
            const fillerEntries = fill(
              new Array(schema.minItems - defaultsLength),
              computeDefaults(items, items && items.default, definitions),
            );
            // then fill up the rest with either the item default or empty, up to minItems

            return defaultEntries.concat(fillerEntries);
          }
        } else {
          return [];
        }
      }
  }
  return defaults;
}

export function getDefaultFormState(schemaTemp?: ICoreMetaSchema, formData?, definitions = {}) {
  if (!isPlainObject(schemaTemp)) {
    throw new Error("Invalid schema: " + schemaTemp);
  }
  const schema = retrieveSchema(schemaTemp!, definitions, formData);
  const defaults = computeDefaults(schema, schemaTemp!.default, definitions);

  if (typeof formData === "undefined") {
    // No form datas? Use schema defaults.
    return defaults;
  }
  if (isPlainObject(formData)) {
    // Override schema defaults with form datas.
    return mergeObjects(defaults, formData);
  }
  return formData || defaults;
}

export function getUiOptions(uiSchema: IUISchemaObject): any {
  // get all passed options from ui$widget, ui$options, and ui$<optionName>
  return Object.keys(uiSchema)
    .filter((key) => key.indexOf("ui$") === 0)
    .reduce((options, key) => {
      const value = uiSchema[key];

      if (key === "ui$widget" && isPlainObject(value)) {
        console.warn("Setting options via ui$widget object is deprecated, use ui$options instead");
        return {
          ...options,
          ...(value.options || {}),
          widget: value.component,
        };
      }
      if (key === "ui$options" && isPlainObject(value)) {
        return { ...options, ...value };
      }
      return { ...options, [key.substring(3)]: value };
    }, {});
}

export function mergeObjects(obj1 = {}, obj2, concatArrays = false) {
  // Recursively merge deeply nested objects.
  const acc = {
    ...obj1,
  }; // Prevent mutation of source object.
  return Object.keys(obj2).reduce((accPre, key) => {
    const left = obj1[key];
    const right = obj2[key];
    if (obj1.hasOwnProperty(key) && isPlainObject(right)) {
      accPre[key] = mergeObjects(left, right, concatArrays);
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      accPre[key] = left.concat(right);
    } else {
      accPre[key] = right;
    }
    return accPre;
  }, acc);
}

export function asNumber(value) {
  if (value === "") {
    return undefined;
  }

  if (/\.$/.test(value)) {
    // "3." can't really be considered a number even if it parses in js. The
    // user is most likely entering a float.
    return value;
  }
  if (/\.0$/.test(value)) {
    // we need to return this as a string here, to allow for input like 3.07
    return value;
  }
  const n = Number(value);
  const valid = typeof n === "number" && !isNaN(n);

  if (/\.\d*0$/.test(value)) {
    // It's a number, that's cool - but we need it as a string so it doesn't screw
    // with the user when entering dollar amounts or other values (such as those with
    // specific precision or number of significant digits)
    return value;
  }

  return valid ? n : value;
}

export function orderProperties(properties, order) {
  if (!isArrayLike(order)) {
    return properties;
  }

  const arrayToHash = (arr) =>
    arr.reduce((prev, curr) => {
      prev[curr] = true;
      return prev;
    }, {});
  const errorPropList = (arr) =>
    arr.length > 1 ? `properties '${arr.join("', '")}'` : `property '${arr[0]}'`;
  const propertyHash = arrayToHash(properties);
  const orderHash = arrayToHash(order);
  const extraneous = order.filter((prop) => prop !== "*" && !propertyHash[prop]);
  if (extraneous.length) {
    throw new Error(`uiSchema order list contains extraneous ${errorPropList(extraneous)}`);
  }
  const rest = properties.filter((prop) => !orderHash[prop]);
  const restIndex = order.indexOf("*");
  // if (restIndex === -1) {
  //   if (rest.length) {
  //     throw new Error(`uiSchema order list does not contain ${errorPropList(rest)}`);
  //   }
  //   return order;
  // }
  // if (restIndex !== order.lastIndexOf("*")) {
  //   throw new Error("uiSchema order list contains more than one wildcard item");
  // }

  const complete = [...order];
  // complete.splice(restIndex, 1, ...rest);
  return complete;
}

/**
 * This function checks if the given schema matches a single
 * constant value.
 */
export function isConstant(schema) {
  return (Array.isArray(schema.enum) && schema.enum.length === 1) || schema.hasOwnProperty("const");
}

export function toConstant(schema) {
  if (Array.isArray(schema.enum) && schema.enum.length === 1) {
    return schema.enum[0];
  } else if (schema.hasOwnProperty("const")) {
    return schema.const;
  } else {
    throw new Error("schema cannot be inferred as a constant");
  }
}

export function isSelect(schemaSub: ICoreMetaSchema, definitions: IDefinitions = {}) {
  const schema = retrieveSchema(schemaSub, definitions);
  const altSchemas = schema.oneOf || schema.anyOf;
  if (Array.isArray(schema.enum)) {
    return true;
  } else if (Array.isArray(altSchemas)) {
    return altSchemas.every((altSchemasSub) => isConstant(altSchemasSub));
  }
  return false;
}

export function isMultiSelect(schema, definitions = {}) {
  if (!schema.uniqueItems || !schema.items) {
    return false;
  }
  return isSelect(schema.items, definitions);
}

export function isFilesArray(schema: ICoreMetaSchema, uiSchema: IUISchemaObject, definitions = {}) {
  if (uiSchema["ui$widget"] === "files") {
    return true;
  } else if (schema.items) {
    const itemsSchema = retrieveSchema(schema.items as ICoreMetaSchema, definitions);
    return itemsSchema.type === "string" && itemsSchema.format === "data-url";
  }
  return false;
}

export function isFixedItems(schema: ICoreMetaSchema): boolean {
  return (
    Array.isArray(schema.items) &&
    schema.items.length > 0 &&
    schema.items.every((item) => isPlainObject(item))
  );
}

export function allowAdditionalItems(schema) {
  if (schema.additionalItems === true) {
    console.warn("additionalItems=true is currently not supported");
  }
  return isPlainObject(schema.additionalItems);
}

export function optionsList(schema: ICoreMetaSchema, uiSchema: IUISchema): IOptionsList[] {
  if (schema.enum) {
    const uiEnum = uiSchema["ui$enums"];
    if (uiEnum) {
      return schema.enum.map((value, i) => {
        const currentUiEnum = (uiEnum && uiEnum[i]) || {};
        return {
          description: currentUiEnum.description,
          icon: currentUiEnum.icon,
          label: currentUiEnum.name || String(value),
          value,
        };
      });
    } else {
      return schema.enum.map((value) => {
        const label = String(value);
        return { label, value };
      });
    }
  } else {
    const altSchemas = schema.oneOf || schema.anyOf || [];
    return altSchemas.map((schemaSub, i) => {
      const value = toConstant(schemaSub);
      const label = schemaSub.title || String(value);
      return { label, value };
    });
  }
}

function findSchemaDefinition($ref: string = "", definitions: IDefinitions = {}) {
  // Extract and use the referenced definition if we have it.
  const match = /^#\/definitions\/(.*)$/.exec($ref);
  if (match && match[1]) {
    const parts = match[1].split("/");
    let current: IDefinitions | ICoreMetaSchema = definitions;
    for (let part of parts) {
      part = part.replace(/~1/g, "/").replace(/~0/g, "~");
      if (current.hasOwnProperty(part)) {
        current = current[part];
      } else {
        // No matching definition found, that's an error (bogus schema?)
        throw new Error(`Could not find a definition for ${$ref}.`);
      }
    }
    return current;
  }

  // No matching definition found, that's an error (bogus schema?)
  throw new Error(`Could not find a definition for ${$ref}.`);
}

// In the case where we have to implicitly create a schema, it is useful to know what type to use
//  based on the datas we are defining
const guessType = (value: unknown): string => {
  if (Array.isArray(value)) {
    return "array";
  } else if (typeof value === "string") {
    return "string";
  } else if (value == null) {
    return "null";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (!isNaN(value as number)) {
    return "number";
  } else if (typeof value === "object") {
    return "object";
  }
  // Default to string if we can't figure it out
  return "string";
};

// This function will create new "properties" items for each key in our formData
export function stubExistingAdditionalProperties(
  schema: ICoreMetaSchema,
  definitions = {},
  formData = {},
): ICoreMetaSchema {
  // Clone the schema so we don't ruin the consumer's original
  const schemaSub = {
    ...schema,
    properties: { ...schema.properties },
  };
  Object.keys(formData).forEach((key) => {
    if (schemaSub.properties.hasOwnProperty(key)) {
      // No need to stub, our schema already has the property
      return;
    }
    // The type of our new key should match the additionalProperties value;
    schemaSub.properties[key] =
      schemaSub.additionalProperties && schemaSub.additionalProperties.hasOwnProperty("type")
        ? { ...schemaSub.additionalProperties }
        : { type: guessType(formData[key]) };
    // Set our additional property flag so we know it was dynamically added
    schemaSub.properties[key][ADDITIONAL_PROPERTY_FLAG] = true;
  });
  return schema;
}

export function resolveSchema(
  schema: ICoreMetaSchema,
  definitions = {},
  formData = {},
): ICoreMetaSchema {
  if (schema.$ref) {
    // Retrieve the referenced schema definition.
    const $refSchema = findSchemaDefinition(schema.$ref, definitions);
    // Drop the $ref property of the source schema.
    const { $ref, ...localSchema } = schema;
    // Update referenced schema definition with local schema properties.
    return retrieveSchema({ ...$refSchema, ...localSchema }, definitions, formData);
  } else if (schema.hasOwnProperty("dependencies")) {
    const resolvedSchema = resolveDependencies(schema, definitions, formData);
    return retrieveSchema(resolvedSchema, definitions, formData);
  } else {
    // No $ref or dependencies attribute found, returning the original schema.
    return schema;
  }
}

export function retrieveSchema(
  schema: ICoreMetaSchema,
  definitions: IDefinitions = {},
  formData = {},
) {
  const resolvedSchema = resolveSchema(schema, definitions, formData);
  const hasAdditionalProperties =
    resolvedSchema.hasOwnProperty("additionalProperties") &&
    resolvedSchema.additionalProperties !== false;
  if (hasAdditionalProperties) {
    return stubExistingAdditionalProperties(resolvedSchema, definitions, formData);
  }
  return resolvedSchema;
}

function resolveDependencies(schema: ICoreMetaSchema, definitions, formData) {
  // Drop the dependencies from the source schema.
  const { dependencies = {}, ...resolvedSchemaTemp } = schema;
  let resolvedSchema = resolvedSchemaTemp;
  // Process dependencies updating the local schema properties as appropriate.
  for (const dependencyKey in dependencies) {
    // Skip this dependency if its trigger property is not present.
    if (formData[dependencyKey] === undefined) {
      continue;
    }
    const dependencyValue = dependencies[dependencyKey];
    if (Array.isArray(dependencyValue)) {
      resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
    } else if (isPlainObject(dependencyValue)) {
      resolvedSchema = withDependentSchema(
        resolvedSchema,
        definitions,
        formData,
        dependencyKey,
        dependencyValue,
      );
    }
  }
  return resolvedSchema;
}

function withDependentProperties(schema: ICoreMetaSchema, additionallyRequired) {
  if (!additionallyRequired) {
    return schema;
  }
  const required = Array.isArray(schema.required)
    ? Array.from(new Set([...schema.required, ...additionallyRequired]))
    : additionallyRequired;
  return { ...schema, required };
}

function withDependentSchema(
  schema: ICoreMetaSchema,
  definitions,
  formData,
  dependencyKey,
  dependencyValue,
) {
  const { oneOf, ...dependentSchema } = retrieveSchema(dependencyValue, definitions, formData);
  schema = mergeSchemas(schema, dependentSchema);
  return oneOf === undefined
    ? schema
    : withExactlyOneSubschema(schema, definitions, formData, dependencyKey, oneOf);
}

function withExactlyOneSubschema(
  schema: ICoreMetaSchema,
  definitions,
  formData,
  dependencyKey,
  oneOf,
) {
  if (!Array.isArray(oneOf)) {
    throw new Error(`invalid oneOf: it is some ${typeof oneOf} instead of an array`);
  }
  const validSubschemas = oneOf.filter((subschemaSub) => {
    if (!subschemaSub.properties) {
      return false;
    }
    const { [dependencyKey]: conditionPropertySchemaSub } = subschemaSub.properties;
    if (conditionPropertySchemaSub) {
      const conditionSchema = {
        properties: {
          [dependencyKey]: conditionPropertySchemaSub,
        },
        type: "object",
      };
      const { errors } = validateFormData(formData, conditionSchema);
      return errors.length === 0;
    }
  });
  if (validSubschemas.length !== 1) {
    console.warn(
      "ignoring oneOf in dependencies because there isn't exactly one subschema that is valid",
    );
    return schema;
  }
  const subschema = validSubschemas[0];
  const { [dependencyKey]: conditionPropertySchema, ...dependentSubschema } = subschema.properties;
  const dependentSchema = { ...subschema, properties: dependentSubschema };
  return mergeSchemas(schema, retrieveSchema(dependentSchema, definitions, formData));
}

function mergeSchemas(schema1: ICoreMetaSchema, schema2: ICoreMetaSchema) {
  return mergeObjects(schema1, schema2, true);
}

export function shouldRender(comp, nextProps, nextState) {
  const { props, state } = comp;
  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
}

export function toIdSchema(
  schema: ICoreMetaSchema,
  id,
  definitions,
  formData = {},
  idPrefix = "root",
) {
  const idSchema = {
    $id: id || idPrefix,
  };
  if ("$ref" in schema || "dependencies" in schema) {
    const schemaSub = retrieveSchema(schema, definitions, formData);
    return toIdSchema(schemaSub, id, definitions, formData, idPrefix);
  }
  if ("items" in schema && !(schema.items as ICoreMetaSchema)!.$ref) {
    return toIdSchema(schema.items! as ICoreMetaSchema, id, definitions, formData, idPrefix);
  }
  if (schema.type !== "object") {
    return idSchema;
  }
  for (const name in schema.properties || {}) {
    if (schema.properties!.hasOwnProperty(name)) {
      const field = schema.properties![name];
      const fieldId = idSchema.$id + ID_PLACEHOLDER + name;
      idSchema[name] = toIdSchema(field, fieldId, definitions, formData[name], idPrefix);
    }
  }
  return idSchema;
}

export function parseDateString(dateString: string, includeTime = true) {
  if (!dateString) {
    return {
      day: -1,
      hour: includeTime ? -1 : 0,
      minute: includeTime ? -1 : 0,
      month: -1,
      second: includeTime ? -1 : 0,
      year: -1,
    };
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Unable to parse date " + dateString);
  }
  return {
    day: date.getUTCDate(),
    hour: includeTime ? date.getUTCHours() : 0,
    minute: includeTime ? date.getUTCMinutes() : 0,
    month: date.getUTCMonth() + 1, // oh you, javascript.
    second: includeTime ? date.getUTCSeconds() : 0,
    year: date.getUTCFullYear(),
  };
}

export function toDateString(
  { year, month, day, hour = 0, minute = 0, second = 0 },
  time = true,
): string {
  const utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
  const datetime = new Date(utcTime).toJSON();
  return time ? datetime : datetime.slice(0, 10);
}

export function pad(num: number, size: number): string {
  let s = String(num);
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}

export function setState(instance, state, callback) {
  const { safeRenderCompletion } = instance.props;
  if (safeRenderCompletion) {
    instance.setState(state, callback);
  } else {
    instance.setState(state);
    setImmediate(callback);
  }
}

export function dataURItoBlob(dataURI: string): IURIBlob {
  // Split metadata from datas
  const splitted = dataURI.split(",");
  // Split params
  const params = splitted[0].split(";");
  // Get mime-type from params
  const type = params[0].replace("datas:", "");
  // Filter the name property from params
  const properties = params.filter((param) => {
    return param.split("=")[0] === "name";
  });
  // Look for the name and use unknown if no name property.
  let name;
  if (properties.length !== 1) {
    name = "unknown";
  } else {
    // Because we filtered out the other property,
    // we only have the name case here.
    name = properties[0].split("=")[1];
  }

  // Built the Uint8Array Blob parameter from the base64 string.
  const binary = atob(splitted[1]);
  const array: any[] = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  // Create the blob object
  const blob = new window.Blob([new Uint8Array(array)], { type });

  return { blob, name };
}

export function rangeSpec(schema: ICoreMetaSchema): IRangeSpec {
  const spec: IRangeSpec = {};
  if (schema.multipleOf) {
    spec.step = schema.multipleOf;
  }
  if (schema.minimum || schema.minimum === 0) {
    spec.min = schema.minimum;
  }
  if (schema.maximum || schema.maximum === 0) {
    spec.max = schema.maximum;
  }
  return spec;
}
