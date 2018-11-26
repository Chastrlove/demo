import * as _ from "lodash";
import * as React from "react";
import { Input } from "antd";
import { BaseInput } from "./BaseInput";
import { TextAreaProps } from "antd/lib/input/TextArea";

const { TextArea } = Input;

interface TextareaWidgetProps {
    id: string;
    placeholder?: string;
    options?: any;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    textAreaProps?: TextAreaProps;
}

class TextareaWidget extends React.Component<TextareaWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        autofocus: false,
    };

    public onChange = (e) => {
        const { options, onChange } = this.props;
        const value = _.isEmpty(e.target.value) ? options.emptyValue : e.target.value;
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

        const { value, readonly, disabled, textAreaProps, placeholder } = _.merge(
            {},
            BaseInput.defaultProps,
            this.props,
        );

        const props = {
            ...textAreaProps,
            value,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            disabled,
            readonly,
            onChange: this.onChange,
            placeholder,
        };

        return <TextArea {...props} />;
    }
}

export const MyTextareaWidget = (props: TextareaWidgetProps) => {
    return <TextareaWidget {...props} />;
};
