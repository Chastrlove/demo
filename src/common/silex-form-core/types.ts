import * as React from "react";
import {
  ICoreMetaSchema,
  IError,
  IRegisteredWidgets,
  IUISchemaObject,
} from "../../silex-shared/src/types";

export interface IDefaultField {
  ArrayField: React.ComponentClass<IArrayFieldProps>;
  BooleanField: React.ComponentClass<IBooleanFieldProps>;
  DescriptionField: React.ComponentClass<IDescriptionFieldProps>;
  NumberField: React.ComponentClass<INumberFieldProps>;
  ObjectField: React.ComponentClass<IObjectFieldProps>;
  SchemaField: React.ComponentClass<any>;
  StringField: React.ComponentClass<IStringFieldProps>;
  TitleField: React.ComponentClass<ITitleFieldProps>;
  UnsupportedField: React.ComponentClass<IUnsupportedFieldProps>;
}

export type FieldsType = IDefaultField & {
  [key: string]: React.ComponentClass<any>;
};

export interface IFormProps {
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
  formData?: any;
  widgets: IRegisteredWidgets;
  fields: FieldsType;
  idPrefix?: string;
  ArrayFieldTemplate?: (...args: any[]) => any;
  ObjectFieldTemplate?: (...args: any[]) => any;
  FieldTemplate?: (...args: any[]) => any;
  ErrorList?: React.SFC<any>;
  onChange?: (...args: any[]) => any;
  onError?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  showErrorList?: boolean;
  onSubmit?: (...args: any[]) => any;
  noValidate?: boolean;
  liveValidate?: boolean;
  validate?: (...args: any[]) => any;
  transformErrors?: (...args: any[]) => any;
  safeRenderCompletion?: boolean;
  formContext?: any;
  id?: any;
  className?: any;
}

export interface IFieldProps {
  description: React.ReactElement<IDescriptionFieldProps> | null;
  rawDescription?: string;
  help: React.ReactElement<string | undefined> | null;
  rawHelp?: string;
  errors: React.ReactElement<string[] | undefined> | null;
  rawErrors?: string[];
  id?: any;
  label?: string;
  hidden?: boolean;
  onKeyChange?;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  displayLabel?: boolean;
  classNames?: string;
  formContext?;
  fields: FieldsType;
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
}

export interface IFormState {
  schema?: ICoreMetaSchema;
  uiSchema?: IUISchemaObject;
  idSchema?: any;
  formData?: any;
  edit?: boolean;
  errors?: IError[];
  errorSchema?: any;
}

export interface IErrorListProps {
  errors: any[];

  [key: string]: any;
}

export interface IRegistry {
  widgets: IRegisteredWidgets;
  fields: FieldsType;
  definitions: any;
  formContext: any;
  ArrayFieldTemplate?: React.SFC<IArrayFieldProps>;
  ObjectFieldTemplate?: React.SFC<IObjectFieldProps>;
  FieldTemplate: React.SFC<IFieldProps>;
}

export interface IBooleanFieldProps {
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
  idSchema?: ICoreMetaSchema;
  onChange: (...args: any[]) => any;
  formData?: boolean;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  name?: string;
  registry: IRegistry;
  rawErrors?: string[];
}

export interface IUnsupportedFieldProps {
  schema: ICoreMetaSchema;
  idSchema?: ICoreMetaSchema;
  reason?: string;
}

export interface IObjectFieldProps {
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
  errorSchema?: any;
  idSchema?: ICoreMetaSchema;
  onChange: (...args: any[]) => any;
  formData?: any;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  idPrefix?: string;
  onBlur?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  registry: IRegistry;
  index?: number;
}

export interface ITitleFieldProps {
  id?: string;
  title?: string;
  required?: boolean;
}

export interface IStringFieldProps {
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
  idSchema?: ICoreMetaSchema;
  onChange: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  formData?: string | number;
  registry: IRegistry;
  formContext: any;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  rawErrors?: string[];
}

export interface INumberFieldProps {
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
  idSchema?: ICoreMetaSchema;
  onChange: (...args: any[]) => any;
  formData?: number | string;
  required?: boolean;
  formContext: any;
  registry: IRegistry;
}

export interface IDescriptionFieldProps {
  id?: string;
  description?: string | JSX.Element;
}

export interface IArrayFieldProps {
  schema: ICoreMetaSchema;
  uiSchema: IUISchemaObject;
  idSchema?: ICoreMetaSchema;
  errorSchema?: object;
  onChange: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  formData?: any[];
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  registry: IRegistry;
  name?: string;
  idPrefix?: string;
  rawErrors?: string[];
}
