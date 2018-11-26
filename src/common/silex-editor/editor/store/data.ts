export default [
    {
        schema: {
            type: "string",
            title: "多选框",
            definitions: {
                title: {
                    type: "string",
                    title: "名称",
                    description: "最多20字",
                    maxLength: 20,
                },
                select: {
                    type: "array",
                    title: "选项",
                    description: "最多50项，每项最多20字",
                    maxItems: 50,
                    minItems: 1,
                    items: {
                        type: "string",
                        enum: ["选项1", "选项2", "选项3"],
                    },
                },
                required: {
                    type: "boolean",
                    title: "验证",
                    description: "必填（系统默认必填，不可取消勾选）",
                },
                $ui$print: {
                    type: "boolean",
                    title: "是否打印",
                    description: "参与打印（如不勾选，打印时不显示该项）",
                    default: true,
                },
            },
        },
        uiSchema: {
            "ui:widget": "select",
            "ui:placeholder": "请选择",
        },
        uiDefinitions: {
            title: {
                "ui:widget": "text",
                "ui:placeholder": "请输入控件名称",
            },
            select: {
                "ui:widget": "text",
                "ui:placeholder": "请输入",
            },
            required: {
                "ui:widget": "checkbox",
            },
            $ui$print: {
                "ui:widget": "checkbox",
            },
        },
        id: 1,
    },
];
