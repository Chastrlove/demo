import * as React from "react";
import Fields from "silex-form-core/fields/index";
import Form from "silex-form-core/Form";
import customField from "../lib/fields/index";
import * as Template from "../lib/template/FieldTemplate";
import { defaultWidgets } from "../lib/widgets/index";
import { ICoreMetaSchema, IUISchemaObject } from "silex-shared/types";

export interface FormProps {
    schema: ICoreMetaSchema;
    uiSchema?: IUISchemaObject;
    formData?: any;
    widgets?: {
        [key: string]: ((...args: any[]) => any) | any;
    };
    fields?: {
        [key: string]: (...args: any[]) => any;
    };
    ArrayFieldTemplate?: (...args: any[]) => any;
    ObjectFieldTemplate?: (...args: any[]) => any;
    FieldTemplate?: (...args: any[]) => any;
    ErrorList?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    showErrorList?: boolean;
    onSubmit?: (...args: any[]) => any;
    id?: string;
    className?: string;
    name?: string;
    method?: string;
    target?: string;
    action?: string;
    autocomplete?: string;
    enctype?: string;
    acceptcharset?: string;
    noValidate?: boolean;
    noHtml5Validate?: boolean;
    liveValidate?: boolean;
    validate?: (...args: any[]) => any;
    transformErrors?: (...args: any[]) => any;
    safeRenderCompletion?: boolean;
    formContext?: any;
}

export class MyForm extends React.Component<FormProps, any> {
    public static defaultProps = {};

    public render() {
        const {
            widgets = {},
            fields = {},
            FieldTemplate = Template.FieldTemplate,
            ...other
        } = this.props;

        return (
            <Form
                {...other}
                widgets={{ ...defaultWidgets, ...widgets }}
                fields={{ ...Fields, ...customField, ...fields }}
                FieldTemplate={FieldTemplate}
            />
        );
    }
}
