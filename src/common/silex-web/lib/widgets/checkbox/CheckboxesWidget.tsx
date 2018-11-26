import * as _ from "lodash";
import { Checkbox } from "antd";
import * as React from "react";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import * as style from "./CheckboxStyle.pcss";

export interface ICheckboxesWidgetProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    options: {
        enumOptions?: any[];
        inline?: boolean;
        enumOptionName?: string;
        enumOptionValue?: string;
    };
    inline: boolean;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
}

const CheckboxGroup = Checkbox.Group;

class CheckboxesWidget extends React.Component<ICheckboxesWidgetProps, any> {
    public static defaultProps = {
        inline: true,
        autofocus: true,
        options: {
            enumOptions: [],
            enumOptionName: "label",
            enumOptionValue: "value",
        },
    };

    public onChange = (checkedValue) => {
        console.log("checkedValue", checkedValue);
        const { onChange } = this.props;
        if (onChange && _.isFunction(onChange)) {
            onChange(checkedValue);
        }
    };

    public render() {
        const { options, value, disabled, readonly, inline } = _.merge(
            {},
            CheckboxesWidget.defaultProps,
            this.props,
        );

        const { enumOptions, enumOptionName, enumOptionValue } = options;

        return (
            <CheckboxGroup onChange={this.onChange} value={value} disabled={disabled || readonly}>
                {_.map(enumOptions, (option, i) => {
                    if (!_.has(option, enumOptionName) || !_.has(option, enumOptionValue)) {
                        throw new Error("enumOptions 配置错误！");
                    }

                    return (
                        <Checkbox
                            value={option[enumOptionValue]}
                            key={i}
                            className={inline ? style.inlineCheckBoxItem : ""}
                        >
                            {option[enumOptionName]}
                        </Checkbox>
                    );
                })}
            </CheckboxGroup>
        );
    }
}

export const MyCheckboxesWidget = (props: ICheckboxesWidgetProps) => {
    return <CheckboxesWidget {...props} />;
};
