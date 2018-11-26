import { Entire, JSONSchema, UISchema } from "./api/api";

export interface DragBoxBean {
    widget: Entire;
    cuParentPath: string;
    index: number;
}

export interface WidgetPathBean {
    currentSchemaPath: string;
    currentUiSchemaPath: string;
    currentFormDataPath: string;
    currentUiDefinitionsPath: string;
    currentDefinitionsPath: string;
}

export interface CustomWidgetBean {
    schema: JSONSchema;
    uiSchema: UISchema;
    formData: any;
    uiDefinitions: any;
}

export interface WidgetPathAndObjectBean {
    widgetPathObj: WidgetPathBean;
    widgetObject: CustomWidgetBean;
}

export interface EditFormBean {
    uiSchema: UISchema;
    schema: JSONSchema;
    formData: any;
    uiDefinitions: any;
    definitions: any;
}

export type EditFormBeanType = keyof EditFormBean;

export const SPLIT_PATH = "_$_";
export const UISCHEMA_PROPS_FRONT = "$ui$";
export const UISCHEMA_FRONT = "ui$";
