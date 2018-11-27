import { Checkbox } from "antd";
import { ColumnProps } from "antd/es/table";
import * as _ from "lodash";
import * as React from "react";
import { ICoreMetaSchema } from "silex-shared/types";
import { getSchemaType } from "silex-shared/utils";

export interface IProperty extends ICoreMetaSchema {
    dataIndex: string;
}

export function getColumns<T = any>(
    properties: _.LoDashExplicitWrapper<_.Dictionary<IProperty>>,
    ui$order: _.LoDashExplicitWrapper<string[]>,
    options: ColumnProps<T> = {},
): _.LoDashExplicitWrapper<Array<ColumnProps<T>>> {
    return ui$order
        .map<string, ColumnProps<T> | false>((key, index) => {
            const property = properties.get(key);
            if (!property.value()) {
                return false;
            }
            return {
                ...{
                    key,
                    dataIndex: key,
                    title: property
                        .get("title")
                        .defaultTo("")
                        .value(),
                    width: 80,
                    resizable: true,
                    checked: true,
                },
                ...options,
            };
        })
        .compact();
}

export function getContentByColumns<T = any>(
    properties: _.LoDashExplicitWrapper<_.Dictionary<IProperty>>,
    ui$order: _.LoDashExplicitWrapper<string[]>,
    onCheck: (e, column, ui$order: _.LoDashExplicitWrapper<string[]>) => unknown,
) {
    return properties.map(createCheckbox(ui$order, onCheck)).zip(
        properties
            .size()
            .times(createBr)
            .dropRight()
            .value(),
    );
}

const widgetMap = {
    boolean: {
        checkbox: "CheckboxWidget",
        hidden: "HiddenWidget",
        radio: "RadioWidget",
        select: "SelectWidget",
    },
    string: {
        text: "TextWidget",
        password: "PasswordWidget",
        email: "EmailWidget",
        hostname: "TextWidget",
        ipv4: "TextWidget",
        ipv6: "TextWidget",
        uri: "URLWidget",
        "data-url": "FileWidget",
        radio: "RadioWidget",
        select: "SelectWidget",
        textarea: "TextareaWidget",
        hidden: "HiddenWidget",
        date: "DateWidget",
        datetime: "DateTimeWidget",
        "date-time": "DateTimeWidget",
        "alt-date": "AltDateWidget",
        "alt-datetime": "AltDateTimeWidget",
        color: "ColorWidget",
        file: "FileWidget",
    },
    number: {
        text: "TextWidget",
        select: "SelectWidget",
        updown: "UpDownWidget",
        range: "RangeWidget",
        radio: "RadioWidget",
        hidden: "HiddenWidget",
    },
    integer: {
        text: "TextWidget",
        select: "SelectWidget",
        updown: "UpDownWidget",
        range: "RangeWidget",
        radio: "RadioWidget",
        hidden: "HiddenWidget",
    },
    array: {
        checkboxes: "CheckboxesWidget",
        select: "SelectWidget",
        files: "FileWidget",
    },
};

export function getWidget(schema, widget, registeredWidgets) {
    const type = getSchemaType(schema);
    if (widgetMap[type as string].hasOwnProperty(widget)) {
        const registeredWidget = registeredWidgets[widgetMap[type as string][widget || "text"]];
        return getWidget(schema, registeredWidget, registeredWidgets);
    }

    throw new Error(`No widget "${widget}" for type "${type}"`);
}

function createCheckbox<T = any>(
    ui$order: _.LoDashExplicitWrapper<string[]>,
    onCheck: (e, column, ui$order: _.LoDashExplicitWrapper<string[]>) => unknown,
) {
    return (property: IProperty, key) => {
        return (
            <Checkbox
                key={key}
                checked={ui$order.indexOf(key).value() >= 0}
                onChange={(e) => {
                    onCheck(e, property, ui$order);
                }}
            >
                {property.title}
            </Checkbox>
        );
    };
}

function createBr(value) {
    return <br key={value} />;
}
