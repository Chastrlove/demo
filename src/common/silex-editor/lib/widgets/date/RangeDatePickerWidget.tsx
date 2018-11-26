import * as _ from "lodash";
import * as moment from "moment";
import * as React from "react";
import { DatePicker } from "antd";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import { RangePickerProps } from "antd/lib/date-picker/interface";

const { RangePicker } = DatePicker;

interface RangePickerWidgetProps {
    schema: PurpleCoreSchemaMetaSchema;
    id: string;
    placeholder?: string;
    options?: any;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    onChange?: (...args: any[]) => any;
    type?: string;
    rangePickerProps?: RangePickerProps;
}

export class RangeDatePickerWidget extends React.Component<RangePickerWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        rangePickerProps: {
            showTime: false,
            format: "YYYY-MM-DD",
            placeholder: ["请开始日期", "请结束日期"],
        },
    };

    public getCalendarContainer = (className): any => {
        return () => {
            return document.querySelector(`.${className}`);
        };
    };

    public onChange = (date: moment.Moment[], dateString: string[]) => {
        const { onChange } = this.props;

        if (onChange && _.isFunction(onChange)) {
            onChange(dateString[0] ? dateString : []);
        }
    };

    public render() {
        const { value, disabled, rangePickerProps, placeholder } = _.merge(
            {},
            RangeDatePickerWidget.defaultProps,
            this.props,
        );

        const datePickerClassName = _.uniqueId("DateWidgetClassName_");

        const className = `${datePickerClassName} ${rangePickerProps.className || ""}`;

        const val =
            _.isArray(value) && !_.isEmpty(value[0]) && !_.isEmpty(value[1])
                ? [moment(value[0]), moment(value[1])]
                : undefined;

        const props: any = {
            ...rangePickerProps,
            ...{
                value: val,
                disabled,
                className,
                getCalendarContainer: this.getCalendarContainer(datePickerClassName),
                placeholder: _.isEmpty(placeholder) ? rangePickerProps.placeholder : placeholder,
                onChange: this.onChange,
            },
        };

        return <RangePicker {...props} />;
    }
}

export const MyRangeDatePickerWidget = (props: RangePickerWidgetProps) => {
    return <RangeDatePickerWidget {...props} />;
};
