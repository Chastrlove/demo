import { ErrorParameters } from "ajv";

export interface IError {
    name: string;
    property: string;
    message?: string;
    params: ErrorParameters;
    stack: string;
}

export type ErrorHandlerType<T> = { [P in keyof T]: IErrorHandler };

export interface IErrorHandler {
    __errors: string[];
    addError: (message: string) => void;
}

export type ErrorHandlerMore<T> = IErrorHandler & ErrorHandlerType<T>;

export interface PurpleCoreSchemaMetaSchema {
    $id?: string;
    $ref?: string;
    $schema?: string;
    additionalItems?: boolean | PurpleCoreSchemaMetaSchema;
    additionalProperties?: boolean | PurpleCoreSchemaMetaSchema;
    allOf?: Array<boolean | PurpleCoreSchemaMetaSchema>;
    anyOf?: Array<boolean | PurpleCoreSchemaMetaSchema>;
    const?: any;
    contains?: boolean | PurpleCoreSchemaMetaSchema;
    default?: any;
    definitions?: { [key: string]: boolean | PurpleCoreSchemaMetaSchema };
    dependencies?: { [key: string]: string[] | boolean | PurpleCoreSchemaMetaSchema };
    description?: string;
    enum?: any[];
    examples?: any[];
    exclusiveMaximum?: number;
    exclusiveMinimum?: number;
    format?: string;
    items?: Array<boolean | PurpleCoreSchemaMetaSchema> | boolean | PurpleCoreSchemaMetaSchema;
    maximum?: number;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    minimum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    multipleOf?: number;
    not?: boolean | PurpleCoreSchemaMetaSchema;
    oneOf?: Array<boolean | PurpleCoreSchemaMetaSchema>;
    pattern?: string;
    patternProperties?: { [key: string]: boolean | PurpleCoreSchemaMetaSchema };
    properties?: { [key: string]: boolean | PurpleCoreSchemaMetaSchema };
    propertyNames?: boolean | PurpleCoreSchemaMetaSchema;
    required?: string[];
    title?: string;
    type?: SimpleTypes[] | SimpleTypes | string;
    uniqueItems?: boolean;
}

export enum SimpleTypes {
    Array = "array",
    Boolean = "boolean",
    Integer = "integer",
    Null = "null",
    Number = "number",
    Object = "object",
    String = "string",
}

export interface UISchemaObject {
    classNames?: string;
    ui$autofocus?: boolean;
    ui$description?: string;
    ui$disabled?: boolean;
    ui$emptyValue?: any;
    ui$enumDisabled?: string[];
    ui$help?: string;
    ui$options?: UIOptions;
    ui$order?: string[];
    ui$placeholder?: string;
    ui$print?: boolean;
    ui$readonly?: boolean;
    ui$rootFieldId?: string;
    ui$title?: string;
    ui$widget?: UIWidget;
}

export interface UIOptions {
    addable?: boolean;
    inline?: boolean;
    inputType?: InputTypeEnum;
    label?: boolean;
    orderable?: boolean;
    removable?: boolean;
    rows?: number;
    yearsRange?: number[];
    enumOptions?: any[];
    enumOptionName?: string;
    enumOptionValue?: string;
}

export enum InputTypeEnum {
    Button = "button",
    Checkbox = "checkbox",
    Date = "date",
    Datetime = "datetime",
    DatetimeLocal = "datetime-local",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Image = "image",
    Month = "month",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Submit = "submit",
    Text = "text",
    Time = "time",
    URL = "url",
    Week = "week",
}

export enum UIWidget {
    AltDate = "alt-date",
    AltDatetime = "alt-datetime",
    Checkbox = "checkbox",
    Checkboxes = "checkboxes",
    Color = "color",
    DataURL = "data-url",
    Date = "date",
    DateTime = "date-time",
    Datetime = "datetime",
    Email = "email",
    File = "file",
    Files = "files",
    Hidden = "hidden",
    Hostname = "hostname",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Select = "select",
    Text = "text",
    Textarea = "textarea",
    URI = "uri",
    Updown = "updown",
}

export interface UIschemaOptionsBean extends UIOptions {
    disabled: boolean;
    readonly: boolean;
    autofocus: boolean;
}
