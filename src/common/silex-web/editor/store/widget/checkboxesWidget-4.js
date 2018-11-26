const checkboxes = {
    schema: {
        type: "string",
        title: "多选框",
        definitions: {
            title: "选项表单",
            type: "object",
            properties: {
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
                requiredCheckbox: {
                    type: "array",
                    title: "验证",
                    items: {
                        type: "string",
                        enum: ["必填（系统默认必填，不可取消勾选）"],
                    },
                },
                printCheckbox: {
                    type: "boolean",
                    title: "打印",
                    description: "必填（系统默认必填，不可取消勾选）",
                    default: true,
                },
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
        requiredCheckbox: {
            "ui:widget": "checkbox",
        },
        printCheckbox: {
            "ui:widget": "checkbox",
        },
    },
};
