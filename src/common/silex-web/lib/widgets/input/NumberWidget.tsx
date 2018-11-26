import * as _ from "lodash";
import * as React from "react";
import { InputNumber } from "antd";
import { InputNumberProps } from "antd/lib/input-number";
import { isEmptyWithNumber } from "../../util";

interface NumberWidgetProps {
    id: string;
    placeholder?: string;
    options?: any;
    value?: number;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    inputNumberProps?: InputNumberProps;
}

class NumberWidget extends React.Component<NumberWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        autofocus: false,
    };

    public onChange = (v) => {
        const { options, onChange } = this.props;
        const value = isEmptyWithNumber(v) ? options.emptyValue : v;
        if (onChange && _.isFunction(onChange)) {
            onChange(value);
        }
    };

    public onBlur = (e) => {
        const { id, onBlur } = this.props;

        if (onBlur && _.isFunction(onBlur)) {
            onBlur(id, e.target.value);
        }
    };

    public onFocus = (e) => {
        const { id, onFocus } = this.props;

        if (onFocus && _.isFunction(onFocus)) {
            onFocus(id, e.target.value);
        }
    };

    public render() {
        if (_.isEmpty(this.props.id)) {
            console.log("No id for", this.props);
            throw new Error(`no id for props ${JSON.stringify(this.props)}`);
        }

        const { value, readonly, disabled, inputNumberProps, placeholder } = _.merge(
            {},
            NumberWidget.defaultProps,
            this.props,
        );

        const props = {
            ...inputNumberProps,
            value,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            disabled,
            readonly,
            onChange: this.onChange,
            placeholder,
            style: { width: "100%" },
        };

        return <InputNumber {...props} />;
    }
}

export const MyNumberWidget = (props: NumberWidgetProps) => {
    return <NumberWidget {...props} />;
};
