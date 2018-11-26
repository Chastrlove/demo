import * as _ from "lodash";
import { Select } from "antd";
import * as React from "react";
import { PurpleCoreSchemaMetaSchema } from "../../types";
// import * as style from "./SelectStyle.pcss";
import { SelectProps } from "antd/lib/select";

export interface ISelectWidgetProps {
    schema?: PurpleCoreSchemaMetaSchema;
    id?: string;
    options?: {
        enumOptions?: any[];
        enumOptionName?: string;
        enumOptionValue?: string;
        enumDisabled?: any[];
    };
    value?: any;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    placeholder?: string;
    selectProps?: SelectProps;
}

const Option = Select.Option;

class SelectWidget extends React.Component<ISelectWidgetProps, any> {
    public static defaultProps: ISelectWidgetProps = {
        disabled: false,
        readonly: false,
        multiple: false,
        placeholder: "",
        options: {
            enumOptions: [],
            enumOptionName: "label",
            enumOptionValue: "value",
            enumDisabled: [],
        },
        selectProps: {
            allowClear: true,
            maxTagCount: 3,
            maxTagPlaceholder: "...",
        },
    };

    public onChange = (value) => {
        console.log("select selected", value);
        const { onChange } = this.props;
        if (onChange && _.isFunction(onChange)) {
            onChange(value);
        }
    };

    public render() {
        const {
            options = {},
            value,
            disabled,
            readonly,
            placeholder,
            multiple,
            selectProps,
        } = _.merge({}, SelectWidget.defaultProps, this.props);

        const {
            enumOptions = [],
            enumOptionName = "",
            enumOptionValue = "",
            enumDisabled = [],
        } = options;

        const emptyValue = multiple ? [] : undefined;

        const props = {
            ...selectProps,
            ...{
                mode: `${multiple ? "tags" : ""}`,
                style: { width: "100%" },
                placeholder,
                value: _.isEmpty(value) ? emptyValue : value,
                onChange: this.onChange,
                disabled: disabled || readonly,
            },
        };

        return (
            <Select {...props}>
                {_.map(enumOptions, (option, i) => {
                    if (!_.has(option, enumOptionName) || !_.has(option, enumOptionValue)) {
                        throw new Error("enumOptions 配置错误！");
                    }

                    const isDisabled = disabled
                        ? disabled
                        : _.includes(enumDisabled, option[enumOptionValue]);

                    return (
                        <Option key={option[enumOptionValue]} disabled={isDisabled}>
                            {option[enumOptionName]}
                        </Option>
                    );
                })}
            </Select>
        );
    }
}

export const MySelectWidget = (props: ISelectWidgetProps) => {
    return <SelectWidget {...props} />;
};
