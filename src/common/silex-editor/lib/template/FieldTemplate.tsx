import * as _ from "lodash";
import * as React from "react";
import { Form } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

export interface FieldTemplateProps {
    id?: string;
    classNames?: string;
    label?: string;
    errors?: JSX.Element;
    rawErrors?: string[];
    help?: JSX.Element;
    rawHelp?: string | JSX.Element;
    description?: JSX.Element;
    rawDescription?: string | JSX.Element;
    hidden?: boolean;
    required?: boolean;
    readonly?: boolean;
    displayLabel?: boolean;
    fields?: any;
    formContext?: any;
    formItemProps?: FormItemProps;
}

const FormItem = Form.Item;

export class FieldTemplate extends React.Component<FieldTemplateProps, any> {
    public static defaultProps = {
        required: false,
        hidden: false,
    };

    public render() {
        const {
            classNames,
            label,
            children,
            errors,
            hidden,
            required,
            formItemProps,
            displayLabel,
            description
        } = _.merge({}, FieldTemplate.defaultProps, this.props);

        if (hidden) {
            return children;
        }

        const props = {
            required,
            label,
            help: errors,
            ...formItemProps,
        };

        return displayLabel ? (
            <FormItem className={classNames} {...props}>
                <div>{children}</div>
                {description ? <div>{description}</div> : null}
            </FormItem>
        ) : (
            children
        );
    }
}
