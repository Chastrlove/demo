import { ErrorParameters } from "ajv";

export interface IError {
    name: string;
    property: string;
    message?: string;
    params: ErrorParameters;
    stack: string;
    __errors?: any;
}

export type ErrorHandlerType<T> = { [P in keyof T]: IErrorHandler };

export interface IErrorHandler {
    __errors: string[];
    addError: (message: string) => void;
}

export type ErrorHandlerMore<T> = IErrorHandler & ErrorHandlerType<T>;

export interface IURIBlob {
    name: string;
    blob: Blob;
}

export interface IRangeSpec {
    step?: number;
    min?: number;
    max?: number;
}

export interface IDefinitions {
    [key: string]: ICoreMetaSchema;
}

export interface IDependencies {
    [key: string]: string[] | ICoreMetaSchema;
}

export interface ICoreMetaSchema {
    $id?: string;
    $ref?: string;
    $schema?: string;
    additionalItems?: ICoreMetaSchema;
    additionalProperties?: ICoreMetaSchema;
    allOf?: ICoreMetaSchema[];
    anyOf?: ICoreMetaSchema[];
    const?: any;
    contains?: ICoreMetaSchema;
    default?: any;
    definitions?: IDefinitions;
    dependencies?: IDependencies;
    description?: string;
    enum?: any[];
    examples?: any[];
    exclusiveMaximum?: number;
    exclusiveMinimum?: number;
    format?: string;
    items?: ICoreMetaSchema | ICoreMetaSchema[];
    maximum?: number;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    minimum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    multipleOf?: number;
    not?: ICoreMetaSchema;
    oneOf?: ICoreMetaSchema[];
    pattern?: string;
    patternProperties?: IDefinitions;
    properties?: IDefinitions;
    propertyNames?: ICoreMetaSchema;
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

export interface IUIEnums {
    name?: string;
    icon?: string;
    description?: string;
}

export interface IOptionsList extends IUIEnums {
    label: string;
    value: any;
}

export interface IUISchema {
    classNames?: string;
    ui$autofocus?: boolean;
    ui$description?: string;
    ui$disabled?: boolean;
    ui$emptyValue?: any;
    ui$enumDisabled?: string[];
    ui$help?: string;
    ui$options?: IUIOptions;
    ui$order?: string[];
    ui$placeholder?: string;
    ui$print?: boolean;
    ui$readonly?: boolean;
    ui$rootFieldId?: string;
    ui$title?: string;
    ui$widget?: UIWidget;
    ui$enums?: IUIEnums[];
}

export type IUISchemaObject<T = any> = IUISchema & { [P in keyof T]: IUISchemaObject };

export interface IUIOptions {
    addable?: boolean;
    inline?: boolean;
    inputType?: InputTypeEnum;
    label?: boolean;
    orderable?: boolean;
    removable?: boolean;
    rows?: number;
    yearsRange?: number[];
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

export type WidgetType = ((...args: any[]) => any) | object;

export interface IRegisteredWidgets {
    [key: string]: WidgetType;
}
