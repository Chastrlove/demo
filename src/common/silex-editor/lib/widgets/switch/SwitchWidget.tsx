import * as _ from "lodash";
import { Switch } from "antd";
import * as React from "react";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import * as style from "./SwitchStyle.pcss";
import { SwitchProps } from "antd/lib/switch";

export interface ISwitchWidgetProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    label?: string;
    value?: boolean;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    switchProps?: SwitchProps;
}

class SwitchWidget extends React.Component<ISwitchWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        required: false,
    };

    public onChange = (checked) => {
        console.log("switch checked", checked);
        const { onChange } = this.props;
        if (onChange && _.isFunction(onChange)) {
            onChange(checked);
        }
    };

    public render() {
        const { value, disabled, readonly, label, switchProps } = _.assign(
            {},
            SwitchWidget.defaultProps,
            this.props,
        );

        const checked = _.isUndefined(value) ? false : value;

        const props = {
            ...{
                disabled: disabled || readonly,
                checked,
                onChange: this.onChange,
            },
            ...switchProps,
        };

        return <Switch {...props} />;
    }
}

export const MySwitchWidget = (props: ISwitchWidgetProps) => {
    return <SwitchWidget {...props} />;
};
