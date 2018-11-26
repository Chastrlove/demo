import * as _ from "lodash";
import { action, observable, toJS } from "mobx";
import { LeftModuleStore } from "./LeftModuleStore";
import { JSONSchema, UISchema } from "../api/api";
import { RightModuleStore } from "./RightModuleStore";
import {
    DragBoxBean,
    EditFormBean,
    EditFormBeanType,
    SPLIT_PATH,
    UISCHEMA_PROPS_FRONT,
    WidgetPathAndObjectBean,
    WidgetPathBean,
} from "../type";
import { CenterModuleStore } from "./CenterModuleStore";
import { toJSDeep } from "../../lib/util";

export class Store {
    public leftModule: LeftModuleStore;
    public rightModule: RightModuleStore;
    public centerModuleStore: CenterModuleStore;

    /**
     * 当前提交的 form 表单
     */
    @observable
    public form: EditFormBean = {
        schema: { type: "object", properties: {} },
        uiSchema: {},
        formData: {},
        uiDefinitions: {},
        definitions: {},
    };

    // @observable
    // public form: EditFormBean = {
    //     schema: {
    //         type: "object",
    //         properties: {
    //             "string@1541076600443": {
    //                 title: "颜色选择器",
    //                 type: "string",
    //                 description: "",
    //                 minimum: -99999999,
    //                 exclusiveMinimum: -99999999,
    //                 maximum: 99999999,
    //                 exclusiveMaximum: 99999999,
    //                 multipleOf: 0.001,
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //             "string@1541076603034": {
    //                 title: "空白",
    //                 type: "string",
    //                 description: "",
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //             "number@1541076728269": {
    //                 title: "子表",
    //                 type: "number",
    //                 description: "",
    //                 minimum: -99999999,
    //                 exclusiveMinimum: -99999999,
    //                 maximum: 99999999,
    //                 exclusiveMaximum: 99999999,
    //                 multipleOf: 0.001,
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //             "string@1541076769234": {
    //                 title: "空白",
    //                 type: "string",
    //                 description: "",
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //             "object@1541076611543": {
    //                 title: "组套件",
    //                 type: "object",
    //                 description: "",
    //                 properties: {
    //                     "number@1541076716436": {
    //                         title: "链接",
    //                         type: "number",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "boolean@1541076598291": {
    //                         title: "单选框",
    //                         type: "boolean",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "string@1541076701755": {
    //                         title: "颜色选择器",
    //                         type: "string",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "string@1541076637898": {
    //                         title: "下拉复选框",
    //                         type: "string",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "number@1541076623063": {
    //                         title: "金额",
    //                         type: "number",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             required: {
    //                                 type: "boolean",
    //                                 title: "是否必填",
    //                                 default: false,
    //                             },
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                         required: true,
    //                     },
    //                     "number@1541076640475": {
    //                         title: "密码",
    //                         type: "number",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "string@1541076918321": {
    //                         title: "空白",
    //                         type: "string",
    //                         description: "",
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "string@1541076926143": {
    //                         title: "空白",
    //                         type: "string",
    //                         description: "",
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "string@1541076950758": {
    //                         title: "空白",
    //                         type: "string",
    //                         description: "",
    //                         definitions: {
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                     "number@1541076975186": {
    //                         title: "金额",
    //                         type: "number",
    //                         description: "",
    //                         minimum: -99999999,
    //                         exclusiveMinimum: -99999999,
    //                         maximum: 99999999,
    //                         exclusiveMaximum: 99999999,
    //                         multipleOf: 0.001,
    //                         definitions: {
    //                             required: {
    //                                 type: "boolean",
    //                                 title: "是否必填",
    //                                 default: false,
    //                             },
    //                             $ui$widget: {
    //                                 type: "string",
    //                                 title: "控件编码",
    //                                 enum: [
    //                                     "checkbox",
    //                                     "radio",
    //                                     "select",
    //                                     "hidden",
    //                                     "text",
    //                                     "password",
    //                                     "email",
    //                                     "hostname",
    //                                     "ipv4",
    //                                     "ipv6",
    //                                     "uri",
    //                                     "datas-url",
    //                                     "textarea",
    //                                     "date",
    //                                     "datetime",
    //                                     "date-time",
    //                                     "alt-date",
    //                                     "alt-datetime",
    //                                     "color",
    //                                     "updown",
    //                                     "range",
    //                                     "file",
    //                                     "checkboxes",
    //                                     "files",
    //                                 ],
    //                             },
    //                             classNames: {
    //                                 title: "classNames",
    //                                 type: "string",
    //                             },
    //                             $ui$options: {
    //                                 allOf: [
    //                                     {
    //                                         type: "object",
    //                                         properties: {
    //                                             orderable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             addable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             removable: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inline: {
    //                                                 type: "boolean",
    //                                             },
    //                                             rows: {
    //                                                 type: "integer",
    //                                             },
    //                                             label: {
    //                                                 type: "boolean",
    //                                             },
    //                                             inputType: {
    //                                                 type: "string",
    //                                                 enum: [
    //                                                     "button",
    //                                                     "checkbox",
    //                                                     "file",
    //                                                     "hidden",
    //                                                     "image",
    //                                                     "password",
    //                                                     "radio",
    //                                                     "reset",
    //                                                     "submit",
    //                                                     "text",
    //                                                     "email",
    //                                                     "url",
    //                                                     "number",
    //                                                     "range",
    //                                                     "date",
    //                                                     "month",
    //                                                     "week",
    //                                                     "time",
    //                                                     "datetime",
    //                                                     "datetime-local",
    //                                                 ],
    //                                             },
    //                                             yearsRange: {
    //                                                 type: "array",
    //                                                 items: {
    //                                                     type: "integer",
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                     {
    //                                         type: "object",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$disabled: {
    //                                 type: "boolean",
    //                                 title: "不可用",
    //                                 default: false,
    //                             },
    //                             $ui$readonly: {
    //                                 type: "boolean",
    //                                 title: "不可编辑",
    //                                 default: false,
    //                             },
    //                             $ui$order: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$enumDisabled: {
    //                                 type: "array",
    //                                 items: {
    //                                     type: "string",
    //                                 },
    //                             },
    //                             $ui$rootFieldId: {
    //                                 type: "string",
    //                             },
    //                             $ui$help: {
    //                                 type: "string",
    //                                 title: "提示信息",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$title: {
    //                                 type: "string",
    //                                 title: "控件名称",
    //                                 maxLength: 20,
    //                             },
    //                             $ui$description: {
    //                                 type: "string",
    //                                 title: "描述",
    //                                 maxLength: 1000,
    //                             },
    //                             $ui$autofocus: {
    //                                 type: "boolean",
    //                                 title: "自动聚焦",
    //                                 default: true,
    //                             },
    //                             $ui$placeholder: {
    //                                 type: "string",
    //                                 title: "占位文字",
    //                                 maxLength: 50,
    //                             },
    //                             $ui$emptyValue: {
    //                                 anyOf: [
    //                                     {
    //                                         description: "schema for tags array here",
    //                                     },
    //                                     {
    //                                         description: "schema for the base object here",
    //                                     },
    //                                 ],
    //                             },
    //                             $ui$print: {
    //                                 type: "boolean",
    //                                 title: "是否打印",
    //                                 default: true,
    //                             },
    //                             $ui$thousandSeparator: {
    //                                 type: "boolean",
    //                                 title: "显示千分位分隔符",
    //                                 default: false,
    //                             },
    //                             $ui$asJudgment: {
    //                                 type: "boolean",
    //                                 title: "是否参与审批判断",
    //                                 default: false,
    //                             },
    //                             $ui$limitTimes: {
    //                                 type: "integer",
    //                                 title: "单表限制使用次数",
    //                                 minimum: 0,
    //                                 default: 999,
    //                             },
    //                             $ui$digitalCapitals: {
    //                                 type: "boolean",
    //                                 title: "是否显示中文大写",
    //                                 default: false,
    //                             },
    //                             $ui$unit: {
    //                                 type: "string",
    //                                 title: "单位",
    //                                 maxLength: 10,
    //                             },
    //                             $id: {
    //                                 type: "string",
    //                             },
    //                             $schema: {
    //                                 type: "string",
    //                                 format: "uri",
    //                             },
    //                             $comment: {
    //                                 type: "string",
    //                             },
    //                             title: {
    //                                 type: "string",
    //                             },
    //                             description: {
    //                                 type: "string",
    //                             },
    //                             default: {},
    //                             readOnly: {
    //                                 type: "boolean",
    //                                 default: false,
    //                             },
    //                             examples: {
    //                                 type: "array",
    //                                 items: {},
    //                             },
    //                             multipleOf: {
    //                                 type: "number",
    //                             },
    //                             maximum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMaximum: {
    //                                 type: "number",
    //                             },
    //                             minimum: {
    //                                 type: "number",
    //                             },
    //                             exclusiveMinimum: {
    //                                 type: "number",
    //                             },
    //                             maxLength: {
    //                                 $ref: "#/definitions/nonNegativeInteger",
    //                             },
    //                             minLength: {
    //                                 $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                             },
    //                         },
    //                     },
    //                 },
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         type: "boolean",
    //                         title: "是否必填",
    //                         default: false,
    //                     },
    //                 },
    //             },
    //             "boolean@1541076781986": {
    //                 title: "单选框",
    //                 type: "boolean",
    //                 description: "",
    //                 minimum: -99999999,
    //                 exclusiveMinimum: -99999999,
    //                 maximum: 99999999,
    //                 exclusiveMaximum: 99999999,
    //                 multipleOf: 0.001,
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //             "number@1541076797213": {
    //                 title: "金额",
    //                 type: "number",
    //                 description: "",
    //                 minimum: -99999999,
    //                 exclusiveMinimum: -99999999,
    //                 maximum: 99999999,
    //                 exclusiveMaximum: 99999999,
    //                 multipleOf: 0.001,
    //                 definitions: {
    //                     required: {
    //                         type: "boolean",
    //                         title: "是否必填",
    //                         default: false,
    //                     },
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //             "string@1541076800328": {
    //                 title: "空白",
    //                 type: "string",
    //                 description: "",
    //                 definitions: {
    //                     $ui$widget: {
    //                         type: "string",
    //                         title: "控件编码",
    //                         enum: [
    //                             "checkbox",
    //                             "radio",
    //                             "select",
    //                             "hidden",
    //                             "text",
    //                             "password",
    //                             "email",
    //                             "hostname",
    //                             "ipv4",
    //                             "ipv6",
    //                             "uri",
    //                             "datas-url",
    //                             "textarea",
    //                             "date",
    //                             "datetime",
    //                             "date-time",
    //                             "alt-date",
    //                             "alt-datetime",
    //                             "color",
    //                             "updown",
    //                             "range",
    //                             "file",
    //                             "checkboxes",
    //                             "files",
    //                         ],
    //                     },
    //                     classNames: {
    //                         title: "classNames",
    //                         type: "string",
    //                     },
    //                     $ui$options: {
    //                         allOf: [
    //                             {
    //                                 type: "object",
    //                                 properties: {
    //                                     orderable: {
    //                                         type: "boolean",
    //                                     },
    //                                     addable: {
    //                                         type: "boolean",
    //                                     },
    //                                     removable: {
    //                                         type: "boolean",
    //                                     },
    //                                     inline: {
    //                                         type: "boolean",
    //                                     },
    //                                     rows: {
    //                                         type: "integer",
    //                                     },
    //                                     label: {
    //                                         type: "boolean",
    //                                     },
    //                                     inputType: {
    //                                         type: "string",
    //                                         enum: [
    //                                             "button",
    //                                             "checkbox",
    //                                             "file",
    //                                             "hidden",
    //                                             "image",
    //                                             "password",
    //                                             "radio",
    //                                             "reset",
    //                                             "submit",
    //                                             "text",
    //                                             "email",
    //                                             "url",
    //                                             "number",
    //                                             "range",
    //                                             "date",
    //                                             "month",
    //                                             "week",
    //                                             "time",
    //                                             "datetime",
    //                                             "datetime-local",
    //                                         ],
    //                                     },
    //                                     yearsRange: {
    //                                         type: "array",
    //                                         items: {
    //                                             type: "integer",
    //                                         },
    //                                     },
    //                                 },
    //                             },
    //                             {
    //                                 type: "object",
    //                             },
    //                         ],
    //                     },
    //                     $ui$disabled: {
    //                         type: "boolean",
    //                         title: "不可用",
    //                         default: false,
    //                     },
    //                     $ui$readonly: {
    //                         type: "boolean",
    //                         title: "不可编辑",
    //                         default: false,
    //                     },
    //                     $ui$order: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$enumDisabled: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                         },
    //                     },
    //                     $ui$rootFieldId: {
    //                         type: "string",
    //                     },
    //                     $ui$help: {
    //                         type: "string",
    //                         title: "提示信息",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$title: {
    //                         type: "string",
    //                         title: "控件名称",
    //                         maxLength: 20,
    //                     },
    //                     $ui$description: {
    //                         type: "string",
    //                         title: "描述",
    //                         maxLength: 1000,
    //                     },
    //                     $ui$autofocus: {
    //                         type: "boolean",
    //                         title: "自动聚焦",
    //                         default: true,
    //                     },
    //                     $ui$placeholder: {
    //                         type: "string",
    //                         title: "占位文字",
    //                         maxLength: 50,
    //                     },
    //                     $ui$emptyValue: {
    //                         anyOf: [
    //                             {
    //                                 description: "schema for tags array here",
    //                             },
    //                             {
    //                                 description: "schema for the base object here",
    //                             },
    //                         ],
    //                     },
    //                     $ui$print: {
    //                         type: "boolean",
    //                         title: "是否打印",
    //                         default: true,
    //                     },
    //                     $ui$thousandSeparator: {
    //                         type: "boolean",
    //                         title: "显示千分位分隔符",
    //                         default: false,
    //                     },
    //                     $ui$asJudgment: {
    //                         type: "boolean",
    //                         title: "是否参与审批判断",
    //                         default: false,
    //                     },
    //                     $ui$limitTimes: {
    //                         type: "integer",
    //                         title: "单表限制使用次数",
    //                         minimum: 0,
    //                         default: 999,
    //                     },
    //                     $ui$digitalCapitals: {
    //                         type: "boolean",
    //                         title: "是否显示中文大写",
    //                         default: false,
    //                     },
    //                     $ui$unit: {
    //                         type: "string",
    //                         title: "单位",
    //                         maxLength: 10,
    //                     },
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                     },
    //                     description: {
    //                         type: "string",
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                 },
    //             },
    //         },
    //     },
    //     uiSchema: {
    //         ui$order: [
    //             "string@1541076600443",
    //             "string@1541076769234",
    //             "object@1541076611543",
    //             "number@1541076728269",
    //             "string@1541076800328",
    //             "number@1541076797213",
    //             "string@1541076603034",
    //             "boolean@1541076781986",
    //         ],
    //         "string@1541076600443": {
    //             ui$widget: "select",
    //             ui$placeholder: "请选择",
    //             ui$help: "",
    //             ui$unit: "",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //         "string@1541076603034": {
    //             ui$widget: "whiteSpace",
    //             ui$placeholder: "请输入",
    //             ui$help: "",
    //             ui$unit: "",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //         "number@1541076728269": {
    //             ui$widget: "text",
    //             ui$placeholder: "请输入",
    //             ui$help: "",
    //             ui$unit: "元",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //         "string@1541076769234": {
    //             ui$widget: "whiteSpace",
    //             ui$placeholder: "请输入",
    //             ui$help: "",
    //             ui$unit: "",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //         "object@1541076611543": {
    //             ui$placeholder: "请输入",
    //             ui$help: "",
    //             ui$unit: "",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //             ui$order: [
    //                 "number@1541076623063",
    //                 "number@1541076975186",
    //                 "string@1541076918321",
    //                 "number@1541076716436",
    //                 "string@1541076926143",
    //                 "number@1541076640475",
    //                 "string@1541076950758",
    //                 "boolean@1541076598291",
    //                 "string@1541076637898",
    //                 "string@1541076701755",
    //             ],
    //             "number@1541076716436": {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "元",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "boolean@1541076598291": {
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$help: "",
    //                 ui$unit: "元",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "string@1541076701755": {
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$help: "",
    //                 ui$unit: "",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "string@1541076637898": {
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$help: "",
    //                 ui$unit: "元",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "number@1541076623063": {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "元",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: true,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "number@1541076640475": {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "元",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "string@1541076918321": {
    //                 ui$widget: "whiteSpace",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "string@1541076926143": {
    //                 ui$widget: "whiteSpace",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "string@1541076950758": {
    //                 ui$widget: "whiteSpace",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //             "number@1541076975186": {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$help: "",
    //                 ui$unit: "元",
    //                 ui$thousandSeparator: false,
    //                 ui$digitalCapitals: true,
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: true,
    //                 ui$disabled: false,
    //                 ui$print: true,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //             },
    //         },
    //         "boolean@1541076781986": {
    //             ui$widget: "select",
    //             ui$placeholder: "请选择",
    //             ui$help: "",
    //             ui$unit: "元",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //         "number@1541076797213": {
    //             ui$widget: "text",
    //             ui$placeholder: "请输入",
    //             ui$help: "",
    //             ui$unit: "元",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //         "string@1541076800328": {
    //             ui$widget: "whiteSpace",
    //             ui$placeholder: "请输入",
    //             ui$help: "",
    //             ui$unit: "",
    //             ui$thousandSeparator: false,
    //             ui$digitalCapitals: true,
    //             ui$autofocus: false,
    //             ui$emptyValue: "",
    //             ui$readonly: true,
    //             ui$disabled: false,
    //             ui$print: true,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //         },
    //     },
    //     formData: {
    //         "object@1541076611543": {
    //             ui$disabled: false,
    //             ui$readonly: true,
    //             ui$order: [
    //                 "boolean@1541076598291",
    //                 "string@1541076701755",
    //                 "string@1541076637898",
    //                 "number@1541076640475",
    //                 "number@1541076716436",
    //                 "number@1541076623063",
    //             ],
    //             ui$help: "",
    //             ui$autofocus: false,
    //             ui$placeholder: "请输入",
    //             ui$emptyValue: "",
    //             ui$print: true,
    //             ui$thousandSeparator: false,
    //             ui$asJudgment: true,
    //             ui$limitTimes: 999,
    //             ui$digitalCapitals: true,
    //             ui$unit: "",
    //             title: "组套件",
    //             description: "",
    //             "number@1541076623063": {
    //                 required: true,
    //                 ui$widget: "text",
    //                 ui$disabled: true,
    //                 ui$readonly: true,
    //                 ui$help: "",
    //                 ui$autofocus: false,
    //                 ui$placeholder: "请输入",
    //                 ui$emptyValue: "",
    //                 ui$print: true,
    //                 ui$thousandSeparator: false,
    //                 ui$asJudgment: true,
    //                 ui$limitTimes: 999,
    //                 ui$digitalCapitals: true,
    //                 ui$unit: "元",
    //                 title: "金额",
    //                 description: "",
    //                 multipleOf: 0.001,
    //                 maximum: 99999999,
    //                 exclusiveMaximum: 99999999,
    //                 minimum: -99999999,
    //                 exclusiveMinimum: -99999999,
    //             },
    //         },
    //     },
    //     uiDefinitions: {
    //         "string@1541076600443": {
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$widget: {
    //                 ui$widget: "text",
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //         "string@1541076603034": {
    //             $ui$widget: {
    //                 ui$widget: "text",
    //             },
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //         "number@1541076728269": {
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$widget: {
    //                 ui$widget: "text",
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //         "string@1541076769234": {
    //             $ui$widget: {
    //                 ui$widget: "text",
    //             },
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //         "object@1541076611543": {
    //             $ui$widget: {
    //                 ui$widget: "select",
    //             },
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             "number@1541076716436": {
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "boolean@1541076598291": {
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "string@1541076701755": {
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "string@1541076637898": {
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "number@1541076623063": {
    //                 $ui$widget: {
    //                     ui$widget: "select",
    //                 },
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "number@1541076640475": {
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "string@1541076918321": {
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "string@1541076926143": {
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "string@1541076950758": {
    //                 $ui$widget: {
    //                     ui$widget: "text",
    //                 },
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //             "number@1541076975186": {
    //                 $ui$widget: {
    //                     ui$widget: "select",
    //                 },
    //                 title: {
    //                     ui$title: "控件名称",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 description: {
    //                     ui$title: "描述",
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 default: {
    //                     ui$title: "默认值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 readOnly: {
    //                     ui$title: "不可编辑",
    //                     ui$widget: "checkbox",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 multipleOf: {
    //                     ui$title: "整除值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maximum: {
    //                     ui$title: "最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMaximum: {
    //                     ui$title: "是否包含最大值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 minimum: {
    //                     ui$title: "最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 exclusiveMinimum: {
    //                     ui$title: "是否包含最小值",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: "",
    //                     ui$disabled: false,
    //                 },
    //                 maxLength: {
    //                     ui$title: "最大长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minLength: {
    //                     ui$title: "最小长度",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 pattern: {
    //                     ui$title: "正则表达式",
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 maxItems: {
    //                     ui$title: "最大个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 minItems: {
    //                     ui$title: "最小个数",
    //                     ui$widget: "updown",
    //                     ui$placeholder: "请输入",
    //                     ui$autofocus: true,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 uniqueItems: {
    //                     ui$title: "选项唯一性",
    //                     ui$widget: "checkbox",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 format: {
    //                     ui$title: "格式",
    //                     ui$widget: "select",
    //                     ui$placeholder: "请选择",
    //                     ui$autofocus: false,
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //                 enum: {
    //                     ui$title: "选项",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                     items: {
    //                         ui$placehold: "请输入",
    //                         ui$widget: "text",
    //                         ui$emptyValue: "",
    //                         ui$readonly: false,
    //                         ui$disabled: false,
    //                     },
    //                 },
    //                 $ui$disabled: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$asJudgment: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$autofocus: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$description: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入描述",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$digitalCapitals: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$emptyValue: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$help: {
    //                     ui$widget: "textarea",
    //                     ui$placeholder: "请输入",
    //                     ui$options: {
    //                         rows: 3,
    //                     },
    //                 },
    //                 $ui$limitTimes: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //                 $ui$print: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$readonly: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$thousandSeparator: {
    //                     ui$widget: "checkbox",
    //                 },
    //                 $ui$title: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入名称",
    //                 },
    //                 $ui$unit: {
    //                     ui$widget: "text",
    //                     ui$placeholder: "请输入",
    //                 },
    //             },
    //         },
    //         "boolean@1541076781986": {
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$widget: {
    //                 ui$widget: "text",
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //         "number@1541076797213": {
    //             $ui$widget: {
    //                 ui$widget: "select",
    //             },
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //         "string@1541076800328": {
    //             $ui$widget: {
    //                 ui$widget: "text",
    //             },
    //             title: {
    //                 ui$title: "控件名称",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             description: {
    //                 ui$title: "描述",
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             default: {
    //                 ui$title: "默认值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             readOnly: {
    //                 ui$title: "不可编辑",
    //                 ui$widget: "checkbox",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             multipleOf: {
    //                 ui$title: "整除值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maximum: {
    //                 ui$title: "最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             exclusiveMaximum: {
    //                 ui$title: "是否包含最大值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             minimum: {
    //                 ui$title: "最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             exclusiveMinimum: {
    //                 ui$title: "是否包含最小值",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: "",
    //                 ui$disabled: false,
    //             },
    //             maxLength: {
    //                 ui$title: "最大长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minLength: {
    //                 ui$title: "最小长度",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             pattern: {
    //                 ui$title: "正则表达式",
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             maxItems: {
    //                 ui$title: "最大个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             minItems: {
    //                 ui$title: "最小个数",
    //                 ui$widget: "updown",
    //                 ui$placeholder: "请输入",
    //                 ui$autofocus: true,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             uniqueItems: {
    //                 ui$title: "选项唯一性",
    //                 ui$widget: "checkbox",
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             format: {
    //                 ui$title: "格式",
    //                 ui$widget: "select",
    //                 ui$placeholder: "请选择",
    //                 ui$autofocus: false,
    //                 ui$emptyValue: "",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //             },
    //             enum: {
    //                 ui$title: "选项",
    //                 ui$readonly: false,
    //                 ui$disabled: false,
    //                 items: {
    //                     ui$placehold: "请输入",
    //                     ui$widget: "text",
    //                     ui$emptyValue: "",
    //                     ui$readonly: false,
    //                     ui$disabled: false,
    //                 },
    //             },
    //             $ui$disabled: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$asJudgment: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$autofocus: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$description: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入描述",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$digitalCapitals: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$emptyValue: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$help: {
    //                 ui$widget: "textarea",
    //                 ui$placeholder: "请输入",
    //                 ui$options: {
    //                     rows: 3,
    //                 },
    //             },
    //             $ui$limitTimes: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //             $ui$print: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$readonly: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$thousandSeparator: {
    //                 ui$widget: "checkbox",
    //             },
    //             $ui$title: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入名称",
    //             },
    //             $ui$unit: {
    //                 ui$widget: "text",
    //                 ui$placeholder: "请输入",
    //             },
    //         },
    //     },
    //     definitions: {
    //         "string@1541076600443": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //         "string@1541076603034": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //         "number@1541076728269": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //         "string@1541076769234": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //         "object@1541076611543": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //             "number@1541076716436": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "boolean@1541076598291": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "string@1541076701755": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "string@1541076637898": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "number@1541076623063": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "number@1541076640475": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "string@1541076918321": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "string@1541076926143": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "string@1541076950758": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //             "number@1541076975186": {
    //                 schemaArray: {
    //                     type: "array",
    //                     minItems: 1,
    //                     items: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 nonNegativeInteger: {
    //                     type: "integer",
    //                     minimum: 0,
    //                 },
    //                 nonNegativeIntegerDefault0: {
    //                     type: "integer",
    //                     minimum: 0,
    //                     default: 0,
    //                 },
    //                 simpleTypes: {
    //                     enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //                 },
    //                 stringArray: {
    //                     type: "array",
    //                     items: {
    //                         type: "string",
    //                     },
    //                     uniqueItems: true,
    //                     default: {},
    //                 },
    //                 JSONSchema: {
    //                     title: "Core schema meta-schema",
    //                     type: "object",
    //                     properties: {
    //                         $id: {
    //                             type: "string",
    //                         },
    //                         $schema: {
    //                             type: "string",
    //                             format: "uri",
    //                         },
    //                         $ref: {
    //                             type: "string",
    //                         },
    //                         $comment: {
    //                             type: "string",
    //                         },
    //                         title: {
    //                             type: "string",
    //                             maxLength: 20,
    //                         },
    //                         description: {
    //                             type: "string",
    //                             maxLength: 1000,
    //                         },
    //                         default: {},
    //                         readOnly: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         examples: {
    //                             type: "array",
    //                             items: {},
    //                         },
    //                         multipleOf: {
    //                             type: "number",
    //                         },
    //                         maximum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMaximum: {
    //                             type: "number",
    //                         },
    //                         minimum: {
    //                             type: "number",
    //                         },
    //                         exclusiveMinimum: {
    //                             type: "number",
    //                         },
    //                         maxLength: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minLength: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         pattern: {
    //                             type: "string",
    //                             format: "regex",
    //                         },
    //                         additionalItems: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         items: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/schemaArray",
    //                                 },
    //                             ],
    //                             default: true,
    //                         },
    //                         maxItems: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minItems: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         uniqueItems: {
    //                             type: "boolean",
    //                             default: false,
    //                         },
    //                         contains: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         maxProperties: {
    //                             $ref: "#/definitions/nonNegativeInteger",
    //                         },
    //                         minProperties: {
    //                             $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                         },
    //                         required: {
    //                             $ref: "#/definitions/stringArray",
    //                         },
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         definitions: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         properties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         patternProperties: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             default: {},
    //                         },
    //                         dependencies: {
    //                             type: "object",
    //                             additionalProperties: {
    //                                 anyOf: [
    //                                     {
    //                                         $ref: "#/definitions/JSONSchema",
    //                                     },
    //                                     {
    //                                         $ref: "#/definitions/stringArray",
    //                                     },
    //                                 ],
    //                             },
    //                         },
    //                         propertyNames: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         const: {},
    //                         enum: {
    //                             type: "array",
    //                             items: {
    //                                 type: "string",
    //                                 maxLength: 50,
    //                             },
    //                             minItems: 1,
    //                             maxItems: 100,
    //                             uniqueItems: true,
    //                         },
    //                         type: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 {
    //                                     type: "array",
    //                                     items: {
    //                                         $ref: "#/definitions/simpleTypes",
    //                                     },
    //                                     minItems: 1,
    //                                     uniqueItems: true,
    //                                 },
    //                             ],
    //                         },
    //                         format: {
    //                             type: "string",
    //                         },
    //                         contentMediaType: {
    //                             type: "string",
    //                         },
    //                         contentEncoding: {
    //                             type: "string",
    //                         },
    //                         if: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         then: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         else: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         allOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         anyOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         oneOf: {
    //                             $ref: "#/definitions/schemaArray",
    //                         },
    //                         not: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                     },
    //                     default: true,
    //                 },
    //             },
    //         },
    //         "boolean@1541076781986": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //         "number@1541076797213": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //         "string@1541076800328": {
    //             schemaArray: {
    //                 type: "array",
    //                 minItems: 1,
    //                 items: {
    //                     $ref: "#/definitions/JSONSchema",
    //                 },
    //             },
    //             nonNegativeInteger: {
    //                 type: "integer",
    //                 minimum: 0,
    //             },
    //             nonNegativeIntegerDefault0: {
    //                 type: "integer",
    //                 minimum: 0,
    //                 default: 0,
    //             },
    //             simpleTypes: {
    //                 enum: ["array", "boolean", "integer", null, "number", "object", "string"],
    //             },
    //             stringArray: {
    //                 type: "array",
    //                 items: {
    //                     type: "string",
    //                 },
    //                 uniqueItems: true,
    //                 default: {},
    //             },
    //             JSONSchema: {
    //                 title: "Core schema meta-schema",
    //                 type: "object",
    //                 properties: {
    //                     $id: {
    //                         type: "string",
    //                     },
    //                     $schema: {
    //                         type: "string",
    //                         format: "uri",
    //                     },
    //                     $ref: {
    //                         type: "string",
    //                     },
    //                     $comment: {
    //                         type: "string",
    //                     },
    //                     title: {
    //                         type: "string",
    //                         maxLength: 20,
    //                     },
    //                     description: {
    //                         type: "string",
    //                         maxLength: 1000,
    //                     },
    //                     default: {},
    //                     readOnly: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     examples: {
    //                         type: "array",
    //                         items: {},
    //                     },
    //                     multipleOf: {
    //                         type: "number",
    //                     },
    //                     maximum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMaximum: {
    //                         type: "number",
    //                     },
    //                     minimum: {
    //                         type: "number",
    //                     },
    //                     exclusiveMinimum: {
    //                         type: "number",
    //                     },
    //                     maxLength: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minLength: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     pattern: {
    //                         type: "string",
    //                         format: "regex",
    //                     },
    //                     additionalItems: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     items: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/JSONSchema",
    //                             },
    //                             {
    //                                 $ref: "#/definitions/schemaArray",
    //                             },
    //                         ],
    //                         default: true,
    //                     },
    //                     maxItems: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minItems: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     uniqueItems: {
    //                         type: "boolean",
    //                         default: false,
    //                     },
    //                     contains: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     maxProperties: {
    //                         $ref: "#/definitions/nonNegativeInteger",
    //                     },
    //                     minProperties: {
    //                         $ref: "#/definitions/nonNegativeIntegerDefault0",
    //                     },
    //                     required: {
    //                         $ref: "#/definitions/stringArray",
    //                     },
    //                     additionalProperties: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     definitions: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     properties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     patternProperties: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             $ref: "#/definitions/JSONSchema",
    //                         },
    //                         default: {},
    //                     },
    //                     dependencies: {
    //                         type: "object",
    //                         additionalProperties: {
    //                             anyOf: [
    //                                 {
    //                                     $ref: "#/definitions/JSONSchema",
    //                                 },
    //                                 {
    //                                     $ref: "#/definitions/stringArray",
    //                                 },
    //                             ],
    //                         },
    //                     },
    //                     propertyNames: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     const: {},
    //                     enum: {
    //                         type: "array",
    //                         items: {
    //                             type: "string",
    //                             maxLength: 50,
    //                         },
    //                         minItems: 1,
    //                         maxItems: 100,
    //                         uniqueItems: true,
    //                     },
    //                     type: {
    //                         anyOf: [
    //                             {
    //                                 $ref: "#/definitions/simpleTypes",
    //                             },
    //                             {
    //                                 type: "array",
    //                                 items: {
    //                                     $ref: "#/definitions/simpleTypes",
    //                                 },
    //                                 minItems: 1,
    //                                 uniqueItems: true,
    //                             },
    //                         ],
    //                     },
    //                     format: {
    //                         type: "string",
    //                     },
    //                     contentMediaType: {
    //                         type: "string",
    //                     },
    //                     contentEncoding: {
    //                         type: "string",
    //                     },
    //                     if: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     then: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     else: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                     allOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     anyOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     oneOf: {
    //                         $ref: "#/definitions/schemaArray",
    //                     },
    //                     not: {
    //                         $ref: "#/definitions/JSONSchema",
    //                     },
    //                 },
    //                 default: true,
    //             },
    //         },
    //     },
    // };

    @action
    public setForm = () => {
        this.form = toJS(this.form);
    };
    /**
     * 生成一个唯一的key
     * @param {JSONSchema} props
     * @returns {string}
     */
    public getUuid = (props: JSONSchema) => {
        return `${props.type}@${Date.now().toString()}`;
    };
    /**
     * @param {string} cuSchemaPath
     * @param {JSONSchema} currentSchema
     */
    public setFormProps = (cuSchemaPath: string, currentSchema: JSONSchema) => {
        _.set(this.form, cuSchemaPath, currentSchema);
    };
    /**
     * @param {string} currentKey 当前key
     * @param {string} paUiSchemaPath 父级的uischemaPath
     * @param {string} cuUiSchemaPath 当前的uischemaPath
     * @param {UISchema} uiSchema   当前需要赋值的uischema
     * @param {UISchema} parentUiSchema 父级的uischema
     * @param {JSONSchema} parentSchema 父级的schema
     * @param {number} dropIndex   需要拖拽的索引位置
     */
    public setUiSchema = (
        currentKey: string,
        paUiSchemaPath: string,
        cuUiSchemaPath: string,
        currentUiSchema: UISchema,
        parentUiSchema: UISchema,
        parentSchema: JSONSchema,
        dropIndex: number,
    ) => {
        _.set(this.form, cuUiSchemaPath, { ...currentUiSchema, ui$readonly: true });
        this.setUiOrder(parentSchema, parentUiSchema, paUiSchemaPath, currentKey, dropIndex);
    };

    /**
     * 设置 form 排序（uischema ui$order）
     * @param {JSONSchema} parentSchema
     * @param {UISchema} parentUiSchema
     * @param {string} paUiSchemaPath
     * @param {string} currentKey
     * @param {number} dropIndex
     */
    public setUiOrder = (
        parentSchema: JSONSchema,
        parentUiSchema: UISchema,
        paUiSchemaPath: string,
        currentKey: string,
        dropIndex: number,
    ) => {
        const props = (parentSchema && parentSchema.properties) || [];

        // 获取当前拖拽父级的ui$order
        let ui$order: any = [];

        if (parentUiSchema && parentUiSchema.ui$order) {
            ui$order = _.filter(parentUiSchema.ui$order, (key) => {
                return currentKey !== key;
            });

            ui$order.splice(dropIndex + 1, 0, currentKey);
        } else {
            ui$order = _.concat(
                toJS(
                    _.map(props, (item, propsKey) => {
                        return propsKey;
                    }),
                ),
                currentKey,
            );
        }

        console.log("addWidgetToCenter(ui$order)", toJS(ui$order), "currentKey", currentKey);

        _.set(this.form, `${paUiSchemaPath}.ui$order`, ui$order);
    };
    /**
     * 设置 formdata
     * @param {string} cuFormDataPath
     * @param data
     */
    public setFormData = (cuFormDataPath: string, data: any) => {
        _.set(this.form, cuFormDataPath, data);
    };
    /**
     * 设置 definations
     * @param cuUiDefPath
     * @param uiDefinition
     */
    public setUiDefinations = (cuUiDefPath, uiDefinition) => {
        _.set(this.form, cuUiDefPath, uiDefinition);
    };

    /**
     *
     */
    public setDefinations = (cuDefPath, definition) => {
        _.set(this.form, cuDefPath, definition);
    };
    /**
     * 获取父级或者当前的控件的路径和对象
     * isCurrent = true 父级
     * @param path
     * @param {boolean} isCurrent
     * @returns {WidgetPathAndObjectBean}
     */
    public getPathAndObject = (path, isCurrent = false): WidgetPathAndObjectBean => {
        const widgetPathObj = this.getCurrentPath(isCurrent ? path : getParentPathByCuPath(path));
        const widgetObject = this.getCurrentWidget(widgetPathObj);

        return { widgetPathObj, widgetObject };
    };

    /**
     * 删除widget (清空schema，uischema， uidefinations，formdata)
     * @param {WidgetPathBean} cuDragPath
     * @param {string} currentKey
     * @param {string} paUiSchemaPath
     * @param {UISchema} paUiSchema
     * @returns {{}}
     */
    public deleteCurrentItem = (
        currentPathObj: WidgetPathBean,
        currentKey: string,
        paUiSchemaPath: string,
        paUiSchema: UISchema,
    ) => {
        const deleteSign = {};

        _.forIn(currentPathObj, (path, key) => {
            deleteSign[key] = _.unset(this.form, path);
        });

        this.setOriginOrder(currentKey, paUiSchemaPath, paUiSchema);

        return deleteSign;
    };

    /**
     * 删除当前的控件
     * @param {string} id$schema
     */
    @action
    public deleteWidget = (id$schema: string) => {
        const currentKey = this.findCurrentKey(id$schema);
        const currentWidget = this.getPathAndObject(id$schema, true);
        const { widgetPathObj, widgetObject } = this.getPathAndObject(id$schema);

        this.deleteCurrentItem(
            currentWidget.widgetPathObj,
            currentKey,
            widgetPathObj.currentUiSchemaPath,
            widgetObject.uiSchema,
        );

        this.setForm();
    };

    /**
     * 修改原始的ui$order
     * @param {string} currentKey
     * @param {string} paUiSchemaPath
     * @param {UISchema} parentUiSchema
     */
    public setOriginOrder = (
        currentKey: string,
        paUiSchemaPath: string,
        parentUiSchema: UISchema,
    ) => {
        const uiOrder = _.filter(parentUiSchema.ui$order, (fieldName, key) => {
            return currentKey !== fieldName;
        });

        _.set(this.form, `${paUiSchemaPath}.ui$order`, uiOrder);
    };

    /**
     * 获取当前的key值
     * @param fullPath
     * @returns {string | undefined}
     */
    public findCurrentKey = (fullPath) => {
        return _.findLast(_.split(fullPath, SPLIT_PATH)) || "";
    };

    /**
     * 拖拽排序, 删除之前的， 添加拖拽排序的控件
     * @param {string} origin_dragCuPath
     * @param {number} dragIndex
     * @param {string} origin_dropCuPath
     * @param {number} dropIndex
     * @param {boolean} isDropObject
     */
    @action
    public dragSortOpration = (
        origin_dragCuPath: string,
        dragIndex: number,
        origin_dropCuPath: string,
        dropIndex: number,
        isDropObject: boolean,
    ) => {
        // 获取当前的拖拽的path
        const dragCuPathObj = this.getCurrentPath(origin_dragCuPath);

        // 获取当前的dragCu的Widget对象
        const dragCuItem = this.getCurrentWidget(dragCuPathObj);

        // 根据当前拖拽对象路径dragCuPath获取父级对象
        const dragParent = this.getPathAndObject(origin_dragCuPath);

        // 根据当前放下对象路径dropCuPath获取父级对象
        const dropParent = this.getPathAndObject(origin_dropCuPath, isDropObject);

        // 获取当前拖拽的key
        const currentDragKey = this.findCurrentKey(origin_dragCuPath);

        // 获取当前拖拽的路径和对象
        const dragParentPathObj = dragParent.widgetPathObj;
        const dragParentItem = dragParent.widgetObject;

        // 获取当前放置的路径和对象
        const dropParentPathObj = dropParent.widgetPathObj;
        const dropParentItem = dropParent.widgetObject;

        // 当前所在位置
        const dropCuPathObj = this.getCurrentPathObject(dropParentPathObj, currentDragKey);

        // 删除之前drop对象(不是处在同一级)
        const deleteSign = this.deleteCurrentItem(
            dragCuPathObj,
            currentDragKey,
            dragParentPathObj.currentUiSchemaPath,
            dragParentItem.uiSchema,
        );

        this.setUiSchema(
            currentDragKey,
            dropParentPathObj.currentUiSchemaPath,
            dropCuPathObj.currentUiSchemaPath,
            dragCuItem.uiSchema,
            dropParentItem.uiSchema,
            dropParentItem.schema,
            dropIndex,
        );
        this.setFormProps(dropCuPathObj.currentSchemaPath, dragCuItem.schema);
        this.setFormData(dropCuPathObj.currentFormDataPath, dragCuItem.formData);
        this.setUiDefinations(dropCuPathObj.currentUiDefinitionsPath, dragCuItem.uiDefinitions);
        this.setDefinations(dropCuPathObj.currentDefinitionsPath, dragCuItem.definitions);

        this.setForm();
    };

    /**
     * 点击中间区域， 根据右边的配置项描述更新中间的组件信息
     * @param formData
     * @param {JSONSchema} parentSchema
     * @param {UISchema} parentUiSchema
     * @param parentFormData
     */
    @action
    public setCurrentForm = (formData) => {
        for (const key in formData) {
            if (this.currentParentPath) {
                const {
                    currentSchemaPath,
                    currentUiSchemaPath,
                    currentFormDataPath,
                } = this.currentParentPath;

                const currentKey = this.rightModule.transferUiSchemaKey(key);

                if (currentSchemaPath && !_.includes(key, UISCHEMA_PROPS_FRONT)) {
                    _.set(this.form, `${currentSchemaPath}.${currentKey}`, formData[key]);
                }

                if (currentUiSchemaPath && _.includes(key, UISCHEMA_PROPS_FRONT)) {
                    _.set(this.form, `${currentUiSchemaPath}.${currentKey}`, formData[key]);
                }

                if (currentFormDataPath) {
                    _.set(this.form, `${currentFormDataPath}.${currentKey}`, formData[key]);
                }
            }
        }

        this.setForm();

        console.log("form: ", toJSDeep(this.form));
    };
    /**
     * 添加控件 至 中间区域
     */
    @action
    public addWidgetToCenter = (item: DragBoxBean) => {
        const { index, cuParentPath, widget } = item;

        const parentPathObj = this.getCurrentPath(cuParentPath);

        const cuParent = this.getCurrentWidget(parentPathObj);

        const { schema, uiSchema, formData, uiDefinitions, definitions } = widget;

        const key = this.getUuid(schema);

        const currentPathObj = this.getCurrentPathObject(parentPathObj, key);

        this.setUiSchema(
            key,
            parentPathObj.currentUiSchemaPath,
            currentPathObj.currentUiSchemaPath,
            uiSchema,
            cuParent.uiSchema,
            cuParent.schema,
            index,
        );
        this.setFormProps(currentPathObj.currentSchemaPath, schema);
        this.setFormData(currentPathObj.currentFormDataPath, formData);
        this.setUiDefinations(currentPathObj.currentUiDefinitionsPath, uiDefinitions);
        this.setDefinations(currentPathObj.currentDefinitionsPath, definitions);

        this.setForm();

        this.setCurrentParentPath(currentPathObj);
        this.centerModuleStore.setCurrentClickPath(currentPathObj.currentSchemaPath);
    };
    /**
     * 获取当前的 keyPath
     * @param {string} id
     * @param {EditFormBeanType} key
     * @returns {any[]}
     */
    public getKeyPathArr = (id: string = "", key: EditFormBeanType = "schema") => {
        return _.chain(id)
            .replace("root", key)
            .split(SPLIT_PATH)
            .filter((path) => {
                return !_.isEmpty(path);
            })
            .value();
    };

    /**
     * 获取当前 widget 所有路径
     * @param {string} id
     * @returns {WidgetPathBean}
     */
    public getCurrentPath = (id: string): WidgetPathBean => {
        return {
            currentSchemaPath: _.join(this.getKeyPathArr(id, "schema"), ".properties."),
            currentUiSchemaPath: _.join(this.getKeyPathArr(id, "uiSchema"), "."),
            currentFormDataPath: _.join(this.getKeyPathArr(id, "formData"), "."),
            currentUiDefinitionsPath: _.join(this.getKeyPathArr(id, "uiDefinitions"), "."),
            currentDefinitionsPath: _.join(this.getKeyPathArr(id, "definitions"), "."),
        };
    };

    @observable
    public currentParentPath = {
        currentFormDataPath: "",
        currentSchemaPath: "",
        currentUiSchemaPath: "",
        currentUiDefinitionsPath: "",
        currentDefinitionsPath: "",
    };
    /**
     * 右侧所有配置项的父级, 中间区域的当前项
     * @param path
     */
    @action
    public setCurrentParentPath = (path) => {
        this.currentParentPath = path;
    };

    /**
     * @param {WidgetPathBean} currentPathObj
     * @returns {{schema: any; uiSchema: any; formData: any; uiDefinitions: any}}
     */
    public getCurrentWidget = (currentPathObj: WidgetPathBean) => {
        return {
            schema: _.get(this.form, currentPathObj.currentSchemaPath),
            uiSchema: _.get(this.form, currentPathObj.currentUiSchemaPath),
            formData: _.get(this.form, currentPathObj.currentFormDataPath),
            uiDefinitions: _.get(this.form, currentPathObj.currentUiDefinitionsPath),
            definitions: _.get(this.form, currentPathObj.currentDefinitionsPath),
        };
    };
    /**
     * 获取当前控件的整体路径以及对象
     * @param {WidgetPathBean} parentPathObject
     * @param {string} currentDragKey
     * @returns {WidgetPathBean}
     */
    public getCurrentPathObject = (
        parentPathObject: WidgetPathBean,
        currentDragKey: string,
    ): WidgetPathBean => {
        return {
            currentFormDataPath: `${parentPathObject.currentFormDataPath}.${currentDragKey}`,
            currentSchemaPath: `${parentPathObject.currentSchemaPath}.properties.${currentDragKey}`,
            currentUiSchemaPath: `${parentPathObject.currentUiSchemaPath}.${currentDragKey}`,
            currentUiDefinitionsPath: `${
                parentPathObject.currentUiDefinitionsPath
            }.${currentDragKey}`,
            currentDefinitionsPath: `${parentPathObject.currentDefinitionsPath}.${currentDragKey}`,
        };
    };

    public constructor() {
        this.leftModule = new LeftModuleStore(this);
        this.rightModule = new RightModuleStore(this);
        this.centerModuleStore = new CenterModuleStore(this);
    }
}

/**
 * 获取父级的路径
 * @param cuPath
 * @returns {string}
 */
export const getParentPathByCuPath = (cuPath) => {
    return _.chain(cuPath)
        .split(SPLIT_PATH)
        .dropRight()
        .join(SPLIT_PATH)
        .value();
};

export const isRoot = (id) => {
    return id === "root" || id === "root_$_";
};

export const dragDirection = (
    dragIndex,
    hoverIndex,
    initialClientOffset,
    clientOffset,
    sourceClientOffset,
) => {
    const hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
    const hoverClientY = clientOffset.y - sourceClientOffset.y;
    if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
        return "downward";
    }
    if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
        return "upward";
    }
};
