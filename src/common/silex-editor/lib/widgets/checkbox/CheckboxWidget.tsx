import * as _ from "lodash";
import { Checkbox } from "antd";
import * as React from "react";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import * as style from "./CheckboxStyle.pcss";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";

export interface ICheckboxWidgetProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    options: {
        enumOptions?: any[];
        inline?: boolean;
        enumOptionName?: string;
        enumOptionValue?: string;
    };
    label?: string;
    value?: boolean;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    checkboxProps?: CheckboxProps;
}

class CheckboxWidget extends React.Component<ICheckboxWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        required: false,
        options: {
            enumOptions: [],
            enumOptionName: "label",
            enumOptionValue: "value",
        },
    };

    public onChange = (e) => {
        console.log("radio checked", e.target.value);
        const { onChange } = this.props;
        if (onChange && _.isFunction(onChange)) {
            onChange(!e.target.value);
        }
    };

    public render() {
        const { value, disabled, readonly, label, schema } = _.assign(
            {},
            CheckboxWidget.defaultProps,
            this.props,
        );

        const { description = "" } = schema;

        const checked = _.isUndefined(value) ? false : value;

        return (
            <div className={style.checkBoxGroup}>
                <Checkbox
                    checked={checked}
                    value={value}
                    disabled={disabled || readonly}
                    onChange={this.onChange}
                >
                    {label ? label : description}
                </Checkbox>
            </div>
        );
    }
}

export const MyCheckboxWidget = (props: ICheckboxWidgetProps) => {
    return <CheckboxWidget {...props} />;
};
