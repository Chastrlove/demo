import * as _ from "lodash";
import * as React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input/Input";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import { inputSpec } from "../../util";

export interface BaseInputProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    placeholder?: string;
    options?: any;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    type?: string;
    inputProps?: InputProps;
}

export class BaseInput extends React.Component<BaseInputProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        autofocus: false,
        type: "text",
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

        const {
            value,
            readonly,
            disabled,
            options,
            inputProps,
            schema,
            placeholder,
            ...others
        } = _.merge({}, BaseInput.defaultProps, this.props);

        others.type = options.inputType || others.type || "text";

        const props = {
            ...inputProps,
            ...{
                type: others.type,
                onChange: this.onChange,
                value,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                disabled,
                readonly,
                placeholder,
            },
            ...inputSpec(schema),
        };

        return <Input {...props} />;
    }
}
