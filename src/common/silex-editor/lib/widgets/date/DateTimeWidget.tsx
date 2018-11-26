import * as _ from "lodash";
import * as moment from "moment";
import * as React from "react";
import { DatePicker } from "antd";
import { PurpleCoreSchemaMetaSchema } from "../../types";
import { DatePickerProps } from "antd/lib/date-picker/interface";

interface DateTimeWidgetProps {
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
    datePickerProps?: DatePickerProps;
}

export class DateTimeWidget extends React.Component<DateTimeWidgetProps, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        datePickerProps: {
            showTime: true,
            format: "YYYY-MM-DD HH:mm:ss",
            placeholder: "请填写时间",
            style: { width: "100%" },
        },
    };

    public getCalendarContainer = (className): any => {
        return () => {
            return document.querySelector(`.${className}`);
        };
    };

    public onChange = (date: moment.Moment, dateString: string) => {
        const { onChange } = this.props;

        if (onChange && _.isFunction(onChange)) {
            onChange(moment(date).toISOString());
        }
    };

    public render() {
        const { value, disabled, datePickerProps, placeholder } = _.merge(
            {},
            DateTimeWidget.defaultProps,
            this.props,
        );

        const datePickerClassName = _.uniqueId("DateWidgetClassName_");

        const className = `${datePickerClassName} ${datePickerProps.className || ""}`;

        const val = _.isEmpty(value) ? undefined : moment(value);

        const props = {
            ...datePickerProps,
            ...{
                value: val,
                disabled,
                className,
                getCalendarContainer: this.getCalendarContainer(datePickerClassName),
                placeholder: _.isEmpty(placeholder) ? datePickerProps.placeholder : placeholder,
                onChange: this.onChange,
            },
        };

        return <DatePicker {...props} />;
    }
}

export const MyDateTimeWidget = (props: DateTimeWidgetProps) => {
    return <DateTimeWidget {...props} />;
};
