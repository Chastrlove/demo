import * as _ from "lodash";
import * as React from "react";
import { Slider } from "antd";
import { SliderProps } from "antd/lib/slider";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import { rangeSpec } from "../../util";

interface RangeWidgetProps {
    id: string;
    placeholder?: string;
    options?: {
        inline?: boolean;
    };
    value?: number;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    sliderProps?: SliderProps;
    schema: PurpleCoreSchemaMetaSchema;
}

class RangeWidget extends React.Component<RangeWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        autofocus: false,
        options: {
            inline: true,
        },
    };

    public onChange = (value) => {
        const { onChange } = this.props;
        if (onChange && _.isFunction(onChange)) {
            onChange(value);
        }
    };

    public render() {
        if (_.isEmpty(this.props.id)) {
            console.log("No id for", this.props);
            throw new Error(`no id for props ${JSON.stringify(this.props)}`);
        }

        const { value, readonly, disabled, sliderProps, options, schema } = _.merge(
            {},
            RangeWidget.defaultProps,
            this.props,
        );

        const { inline = true } = options;

        const props = {
            ...sliderProps,
            value,
            disabled,
            readonly,
            onChange: this.onChange,
            vertical: !inline,
            ...rangeSpec(schema),
        };

        return <Slider {...props} />;
    }
}

export const MyRangeWidget = (props: RangeWidgetProps) => {
    return <RangeWidget {...props} />;
};
