import * as React from "react";
import { MyRadioWidget } from "./radio/RadioWidget";
import { MyCheckboxWidget } from "./checkbox/CheckboxWidget";
import { MyCheckboxesWidget } from "./checkbox/CheckboxesWidget";
import { MySelectWidget } from "./select/SelectWidget";
import { MySwitchWidget } from "./switch/SwitchWidget";
import { MyPasswordWidget } from "./input/PasswordWidget";
import { MyTextareaWidget } from "./input/TextareaWidget";
import { MyNumberWidget } from "./input/NumberWidget";
import { MyRangeWidget } from "./input/RangeWidget";
import { MyDateWidget } from "./date/DateWidget";
import { MyDateTimeWidget } from "./date/DateTimeWidget";
import { MyRangeDatePickerWidget } from "./date/RangeDatePickerWidget";
import { MyFileWidget } from "./file/FileWidget";
import { MyTextWidget } from "./input/TextWidget";
import { MyHiddenWidget } from "./input/HiddenWidget";
import { MyColorWidget } from "./input/ColorWidget";
import { MyEmailWidget } from "./input/EmailWidget";
import { MyURLWidget } from "./input/URLWidget";

import { SelectProps } from "antd/lib/select";
import { TextAreaProps } from "antd/lib/input/TextArea";
import { RadioProps } from "antd/lib/radio";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { InputProps } from "antd/lib/input/Input";
import { UploadProps } from "antd/lib/upload/interface";
import { DatePickerProps, RangePickerProps } from "antd/lib/date-picker/interface";
import { InputNumberProps } from "antd/lib/input-number";
import { SwitchProps } from "antd/lib/switch";

export const defaultWidgets = {
    RadioWidget: MyRadioWidget,
    CheckboxWidget: MyCheckboxWidget,
    CheckboxesWidget: MyCheckboxesWidget,
    SelectWidget: MySelectWidget,
    PasswordWidget: MyPasswordWidget,
    TextareaWidget: MyTextareaWidget,
    TextWidget: MyTextWidget,
    ColorWidget: MyColorWidget,
    EmailWidget: MyEmailWidget,
    URLWidget: MyURLWidget,
    HiddenWidget: MyHiddenWidget,
    NumberWidget: MyNumberWidget,
    UpDownWidget: MyNumberWidget,
    RangeWidget: MyRangeWidget,
    DateWidget: MyDateWidget,
    DateTimeWidget: MyDateTimeWidget,
    AltDateWidget: MyDateWidget,
    AltDateTimeWidget: MyDateTimeWidget,
    FileWidget: MyFileWidget,
    myRangePickerWidget: MyRangeDatePickerWidget,
    mySwitchWidget: MySwitchWidget,
};

export interface WidgetOptionBean {
    radio?: { radioProps: RadioProps };
    checkbox?: { checkboxProps: CheckboxProps };
    select?: { selectProps: SelectProps };
    textarea?: { textAreaProps: TextAreaProps };
    text?: { inputProps: InputProps };
    file?: { uploadProps: UploadProps };
    rangePicker?: { rangePickerProps: RangePickerProps };
    number?: { inputNumberProps: InputNumberProps };
    date?: { datePickerProps?: DatePickerProps };
    switch?: { switchProps?: SwitchProps };
}

export const initWidgets = (options: WidgetOptionBean, customWidgets?) => {
    return {
        ...{
            RadioWidget: (props) => {
                return <MyRadioWidget {...{ ...props, ...options.radio }} />;
            },
            CheckboxWidget: (props) => {
                return <MyCheckboxWidget {...{ ...props, ...options.checkbox }} />;
            },
            CheckboxesWidget: (props) => {
                return <MyCheckboxesWidget {...{ ...props, ...options.checkbox }} />;
            },
            SelectWidget: (props) => {
                return <MySelectWidget {...{ ...props, ...options.select }} />;
            },
            PasswordWidget: (props) => {
                return <MyPasswordWidget {...{ ...props, ...options.text }} />;
            },
            TextareaWidget: (props) => {
                return <MyTextareaWidget {...{ ...props, ...options.textarea }} />;
            },
            TextWidget: (props) => {
                return <MyTextWidget {...{ ...props, ...options.text }} />;
            },
            ColorWidget: (props) => {
                return <MyColorWidget {...{ ...props, ...options.text }} />;
            },
            EmailWidget: (props) => {
                return <MyEmailWidget {...{ ...props, ...options.text }} />;
            },
            URLWidget: (props) => {
                return <MyURLWidget {...{ ...props, ...options.text }} />;
            },
            HiddenWidget: (props) => {
                return <MyHiddenWidget {...{ ...props, ...options.text }} />;
            },
            NumberWidget: (props) => {
                return <MyNumberWidget {...{ ...props, ...options.number }} />;
            },
            RangeWidget: (props) => {
                return <MyRangeWidget {...{ ...props }} />;
            },
            DateWidget: (props) => {
                return <MyDateWidget {...{ ...props, ...options.date }} />;
            },
            DateTimeWidget: (props) => {
                return <MyDateTimeWidget {...{ ...props, ...options.date }} />;
            },
            AltDateWidget: (props) => {
                return <MyDateWidget {...{ ...props, ...options.date }} />;
            },
            AltDateTimeWidget: (props) => {
                return <MyDateTimeWidget {...{ ...props, ...options.date }} />;
            },
            FileWidget: (props) => {
                return <MyFileWidget {...{ ...props, ...options.file }} />;
            },
            myRangePickerWidget: (props) => {
                return <MyRangeDatePickerWidget {...{ ...props, ...options.rangePicker }} />;
            },
            mySwitchWidget: (props) => {
                return <MySwitchWidget {...{ ...props, ...options.switch }} />;
            },
        },
        ...customWidgets,
    };
};
