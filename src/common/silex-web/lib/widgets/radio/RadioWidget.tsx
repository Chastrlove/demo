import * as _ from "lodash";
import { Radio } from "antd";
import * as React from "react";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import * as style from "./RadioStyle.pcss";
import { RadioProps } from "antd/lib/radio/interface";

export interface IRadioWidgetProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    options: {
        enumOptions?: any[];
        inline?: boolean;
        enumOptionName?: string;
        enumOptionValue?: string;
    };
    value?: any;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    radioProps?: RadioProps;
}

const RadioGroup = Radio.Group;

class RadioWidget extends React.Component<IRadioWidgetProps, any> {
    public static defaultProps = {
        autofocus: true,
        options: {
            enumOptions: [],
            inline: true,
            enumOptionName: "label",
            enumOptionValue: "value",
        },
    };

    public onChange = (e) => {
        console.log("radio checked", e.target.value);
        const { onChange } = this.props;
        if (onChange && _.isFunction(onChange)) {
            onChange(e.target.value);
        }
    };

    public render() {
        const { options, value, disabled, readonly } = _.merge(
            {},
            RadioWidget.defaultProps,
            this.props,
        );

        const { enumOptions, inline, enumOptionName, enumOptionValue } = options;

        return (
            <RadioGroup onChange={this.onChange} value={value}>
                {_.map(enumOptions, (option, i) => {
                    if (!_.has(option, enumOptionName) || !_.has(option, enumOptionValue)) {
                        throw new Error("enumOptions 配置错误！");
                    }

                    return (
                        <Radio
                            className={`${inline ? style.inlineRadioItem : ""}`}
                            value={option[enumOptionValue]}
                            disabled={disabled || readonly}
                            key={i}
                        >
                            {option[enumOptionName]}
                        </Radio>
                    );
                })}
            </RadioGroup>
        );
    }
}

export const MyRadioWidget = (props: IRadioWidgetProps) => {
    return <RadioWidget {...props} />;
};
