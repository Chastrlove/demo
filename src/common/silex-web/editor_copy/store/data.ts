import * as _ from "lodash";

export default _.map(
    [
        {
            schema: {
                title: "金额",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    required: {
                        type: "boolean",
                        title: "是否必填",
                        default: false,
                    },
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                $ui$widget: {
                    ui$widget: "select",
                },

                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "组套件",
                type: "object",
                description: "",
                properties: {},
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                    required: {
                        type: "boolean",
                        title: "是否必填",
                        default: false,
                    },
                },
            },
            uiSchema: {
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                $ui$widget: {
                    ui$widget: "select",
                },

                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "空白",
                type: "string",
                description: "",
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "whiteSpace",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                $ui$widget: {
                    ui$widget: "text",
                },

                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "单选框",
                type: "boolean",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "select",
                ui$placeholder: "请选择",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "复选框",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                default: 10,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "select",
                ui$placeholder: "请选择",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "颜色选择器",
                type: "string",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "select",
                ui$placeholder: "请选择",
                ui$help: "",
                ui$unit: "",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "日期时间",
                type: "string",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "datetime",
                ui$placeholder: "请选择",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "子表",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "隐藏",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "下拉复选框",
                type: "string",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "select",
                ui$placeholder: "请选择",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "数字",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "密码",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "图片",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "单行文本",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "链接",
                type: "number",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "text",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
        {
            schema: {
                title: "附件",
                type: "string",
                description: "",
                minimum: -99999999,
                exclusiveMinimum: -99999999,
                maximum: 99999999,
                exclusiveMaximum: 99999999,
                multipleOf: 0.001,
                definitions: {
                    $ui$widget: {
                        type: "string",
                        title: "控件编码",
                        enum: [
                            "checkbox",
                            "radio",
                            "select",
                            "hidden",
                            "text",
                            "password",
                            "email",
                            "hostname",
                            "ipv4",
                            "ipv6",
                            "uri",
                            "data-url",
                            "textarea",
                            "date",
                            "datetime",
                            "date-time",
                            "alt-date",
                            "alt-datetime",
                            "color",
                            "updown",
                            "range",
                            "file",
                            "checkboxes",
                            "files",
                        ],
                    },
                    classNames: {
                        title: "classNames",
                        type: "string",
                    },
                    $ui$options: {
                        allOf: [
                            {
                                type: "object",
                                properties: {
                                    orderable: {
                                        type: "boolean",
                                    },
                                    addable: {
                                        type: "boolean",
                                    },
                                    removable: {
                                        type: "boolean",
                                    },
                                    inline: {
                                        type: "boolean",
                                    },
                                    rows: {
                                        type: "integer",
                                    },
                                    label: {
                                        type: "boolean",
                                    },
                                    inputType: {
                                        type: "string",
                                        enum: [
                                            "button",
                                            "checkbox",
                                            "file",
                                            "hidden",
                                            "image",
                                            "password",
                                            "radio",
                                            "reset",
                                            "submit",
                                            "text",
                                            "email",
                                            "url",
                                            "number",
                                            "range",
                                            "date",
                                            "month",
                                            "week",
                                            "time",
                                            "datetime",
                                            "datetime-local",
                                        ],
                                    },
                                    yearsRange: {
                                        type: "array",
                                        items: {
                                            type: "integer",
                                        },
                                    },
                                },
                            },
                            {
                                type: "object",
                            },
                        ],
                    },
                    $ui$disabled: {
                        type: "boolean",
                        title: "不可用",
                        default: false,
                    },
                    $ui$readonly: {
                        type: "boolean",
                        title: "不可编辑",
                        default: false,
                    },
                    $ui$order: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$enumDisabled: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                    $ui$rootFieldId: {
                        type: "string",
                    },
                    $ui$help: {
                        type: "string",
                        title: "提示信息",
                        maxLength: 1000,
                    },
                    $ui$title: {
                        type: "string",
                        title: "控件名称",
                        maxLength: 20,
                    },
                    $ui$description: {
                        type: "string",
                        title: "描述",
                        maxLength: 1000,
                    },
                    $ui$autofocus: {
                        type: "boolean",
                        title: "自动聚焦",
                        default: true,
                    },
                    $ui$placeholder: {
                        type: "string",
                        title: "占位文字",
                        maxLength: 50,
                    },
                    $ui$emptyValue: {
                        anyOf: [
                            {
                                description: "schema for tags array here",
                            },
                            {
                                description: "schema for the base object here",
                            },
                        ],
                    },
                    $ui$print: {
                        type: "boolean",
                        title: "是否打印",
                        default: true,
                    },
                    $ui$thousandSeparator: {
                        type: "boolean",
                        title: "显示千分位分隔符",
                        default: false,
                    },
                    $ui$asJudgment: {
                        type: "boolean",
                        title: "是否参与审批判断",
                        default: false,
                    },
                    $ui$limitTimes: {
                        type: "integer",
                        title: "单表限制使用次数",
                        minimum: 0,
                        default: 999,
                    },
                    $ui$digitalCapitals: {
                        type: "boolean",
                        title: "是否显示中文大写",
                        default: false,
                    },
                    $ui$unit: {
                        type: "string",
                        title: "单位",
                        maxLength: 10,
                    },
                    $id: {
                        type: "string",
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                    },
                    $comment: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    default: {},
                    readOnly: {
                        type: "boolean",
                        default: false,
                    },
                    examples: {
                        type: "array",
                        items: {},
                    },
                    multipleOf: {
                        type: "number",
                    },
                    maximum: {
                        type: "number",
                    },
                    exclusiveMaximum: {
                        type: "number",
                    },
                    minimum: {
                        type: "number",
                    },
                    exclusiveMinimum: {
                        type: "number",
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger",
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0",
                    },
                },
            },
            uiSchema: {
                ui$widget: "file",
                ui$placeholder: "请输入",
                ui$help: "",
                ui$unit: "元",
                ui$thousandSeparator: false,
                ui$digitalCapitals: true,
                ui$autofocus: false,
                ui$emptyValue: "",
                ui$readonly: "",
                ui$disabled: false,
                ui$print: true,
                ui$asJudgment: true,
                ui$limitTimes: 999,
            },
            uiDefinitions: {
                title: {
                    ui$title: "控件名称",
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                description: {
                    ui$title: "描述",
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                default: {
                    ui$title: "默认值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                readOnly: {
                    ui$title: "不可编辑",
                    ui$widget: "checkbox",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                multipleOf: {
                    ui$title: "整除值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maximum: {
                    ui$title: "最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                exclusiveMaximum: {
                    ui$title: "是否包含最大值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                minimum: {
                    ui$title: "最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                exclusiveMinimum: {
                    ui$title: "是否包含最小值",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: "",
                    ui$disabled: false,
                },
                maxLength: {
                    ui$title: "最大长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minLength: {
                    ui$title: "最小长度",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                pattern: {
                    ui$title: "正则表达式",
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                maxItems: {
                    ui$title: "最大个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                minItems: {
                    ui$title: "最小个数",
                    ui$widget: "updown",
                    ui$placeholder: "请输入",
                    ui$autofocus: true,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                uniqueItems: {
                    ui$title: "选项唯一性",
                    ui$widget: "checkbox",
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                format: {
                    ui$title: "格式",
                    ui$widget: "select",
                    ui$placeholder: "请选择",
                    ui$autofocus: false,
                    ui$emptyValue: "",
                    ui$readonly: false,
                    ui$disabled: false,
                },
                enum: {
                    ui$title: "选项",
                    ui$readonly: false,
                    ui$disabled: false,
                    items: {
                        ui$placehold: "请输入",
                        ui$widget: "text",
                        ui$emptyValue: "",
                        ui$readonly: false,
                        ui$disabled: false,
                    },
                },
                $ui$widget: {
                    ui$widget: "text",
                },
                $ui$disabled: {
                    ui$widget: "checkbox",
                },
                $ui$asJudgment: {
                    ui$widget: "checkbox",
                },
                $ui$autofocus: {
                    ui$widget: "checkbox",
                },
                $ui$description: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入描述",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$digitalCapitals: {
                    ui$widget: "checkbox",
                },
                $ui$emptyValue: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$help: {
                    ui$widget: "textarea",
                    ui$placeholder: "请输入",
                    ui$options: {
                        rows: 3,
                    },
                },
                $ui$limitTimes: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
                $ui$print: {
                    ui$widget: "checkbox",
                },
                $ui$readonly: {
                    ui$widget: "checkbox",
                },
                $ui$thousandSeparator: {
                    ui$widget: "checkbox",
                },
                $ui$title: {
                    ui$widget: "text",
                    ui$placeholder: "请输入名称",
                },
                $ui$unit: {
                    ui$widget: "text",
                    ui$placeholder: "请输入",
                },
            },
            definitions: {
                schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: {
                        $ref: "#/definitions/JSONSchema",
                    },
                },
                nonNegativeInteger: {
                    type: "integer",
                    minimum: 0,
                },
                nonNegativeIntegerDefault0: {
                    type: "integer",
                    minimum: 0,
                    default: 0,
                },
                simpleTypes: {
                    enum: ["array", "boolean", "integer", null, "number", "object", "string"],
                },
                stringArray: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    uniqueItems: true,
                    default: [],
                },
                JSONSchema: {
                    title: "Core schema meta-schema",
                    type: "object",
                    properties: {
                        $id: {
                            type: "string",
                        },
                        $schema: {
                            type: "string",
                            format: "uri",
                        },
                        $ref: {
                            type: "string",
                        },
                        $comment: {
                            type: "string",
                        },
                        title: {
                            type: "string",
                            maxLength: 20,
                        },
                        description: {
                            type: "string",
                            maxLength: 1000,
                        },
                        default: {},
                        readOnly: {
                            type: "boolean",
                            default: false,
                        },
                        examples: {
                            type: "array",
                            items: {},
                        },
                        multipleOf: {
                            type: "number",
                        },
                        maximum: {
                            type: "number",
                        },
                        exclusiveMaximum: {
                            type: "number",
                        },
                        minimum: {
                            type: "number",
                        },
                        exclusiveMinimum: {
                            type: "number",
                        },
                        maxLength: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minLength: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        pattern: {
                            type: "string",
                            format: "regex",
                        },
                        additionalItems: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        items: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/JSONSchema",
                                },
                                {
                                    $ref: "#/definitions/schemaArray",
                                },
                            ],
                            default: true,
                        },
                        maxItems: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minItems: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        uniqueItems: {
                            type: "boolean",
                            default: false,
                        },
                        contains: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        maxProperties: {
                            $ref: "#/definitions/nonNegativeInteger",
                        },
                        minProperties: {
                            $ref: "#/definitions/nonNegativeIntegerDefault0",
                        },
                        required: {
                            $ref: "#/definitions/stringArray",
                        },
                        additionalProperties: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        definitions: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        properties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        patternProperties: {
                            type: "object",
                            additionalProperties: {
                                $ref: "#/definitions/JSONSchema",
                            },
                            default: {},
                        },
                        dependencies: {
                            type: "object",
                            additionalProperties: {
                                anyOf: [
                                    {
                                        $ref: "#/definitions/JSONSchema",
                                    },
                                    {
                                        $ref: "#/definitions/stringArray",
                                    },
                                ],
                            },
                        },
                        propertyNames: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        const: {},
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                maxLength: 50,
                            },
                            minItems: 1,
                            maxItems: 100,
                            uniqueItems: true,
                        },
                        type: {
                            anyOf: [
                                {
                                    $ref: "#/definitions/simpleTypes",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/simpleTypes",
                                    },
                                    minItems: 1,
                                    uniqueItems: true,
                                },
                            ],
                        },
                        format: {
                            type: "string",
                        },
                        contentMediaType: {
                            type: "string",
                        },
                        contentEncoding: {
                            type: "string",
                        },
                        if: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        then: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        else: {
                            $ref: "#/definitions/JSONSchema",
                        },
                        allOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        anyOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        oneOf: {
                            $ref: "#/definitions/schemaArray",
                        },
                        not: {
                            $ref: "#/definitions/JSONSchema",
                        },
                    },
                    default: true,
                },
            },
            id: 18810701,
            active: true,
            canUpdate: false,
            createBy: "1958-11-30T02:42:02.201Z",
            createTime: "2003-11-01T05:48:28.028Z",
            delete: true,
            last: true,
            release: "nisi Lorem aliqua sed",
            schemaUpdate: true,
            system: false,
            updateBy: "aliquip exercitation ut",
            updateTime: "pariatur incididunt dolor qui c",
        },
    ],
    (item, key) => {
        return { ...item, id: key };
    },
);
