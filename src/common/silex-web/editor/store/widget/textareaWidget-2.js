const textarea = {
    schema: {
        type: "string",
        title: "多行输入框",
        definitions: {
            title: "选项表单",
            type: "object",
            maxLength:2000,
            properties: {
                "title": {
                    type: "string",
                    title: "名称",
                    description:"最多20字",
                    maxLength:20
                },
                "placeholder": {
                    type: "string",
                    title: "提示文案",
                    description:"最多50字",
                    maxLength:50
                },
                "requiredCheckbox": {
                    type: "array",
                    title: "验证",
                    items:{
                        type:"string",
                        enum:["必填"]
                    }
                },
                "printCheckbox": {
                    type: "array",
                    title: "打印",
                    items:{
                        type:"string",
                        enum:["参与打印（如不勾选，打印时不显示该项）"]
                    },
                    default:"参与打印（如不勾选，打印时不显示该项）"
                },
            }
        }
    },
    uiSchema: {
        "ui:widget": "textarea",
        "ui:rows": 3,
        "ui:placeholder": "请输入"
    },
    uiDefinitions: {
        "title": {
            "ui:widget": "text",
            "ui:placeholder": "请输入控件名称"
        },
        "placeholder": {
            "ui:widget": "text",
            "ui:placeholder": "请输入"
        },
        "requiredCheckbox": {
            "ui:widget": "checkbox",
        },
        "printCheckbox": {
            "ui:widget": "checkbox",
        },
    }
}