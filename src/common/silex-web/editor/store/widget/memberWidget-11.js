const member = {
    schema: {
        type: "string",
        title: "联系人",
        definitions: {
            title: "选项表单",
            type: "object",
            properties: {
                "title": {
                    type: "string",
                    title: "名称",
                    description:"最多20字",
                    maxLength:20
                },
                "optionRadio": {
                    type: "string",
                    title: "选项",
                    enum: ["只能选择一个人","可同时选择多人"],
                    default:"只能选择一个人"
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
        "ui:widget": "select",
        "ui:placeholder": "请选择"
    },
    uiDefinitions: {
        "title": {
            "ui:widget": "text",
            "ui:placeholder": "请输入控件名称"
        },
        "optionRadio": {
            "ui:widget": "radio",
        },
        "requiredCheckbox": {
            "ui:widget": "checkbox",
        },
        "printCheckbox": {
            "ui:widget": "checkbox",
        },
    }
}