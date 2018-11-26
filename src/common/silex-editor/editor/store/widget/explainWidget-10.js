const explain = {
    schema: {
        type: "string",
        title: "附件",
        definitions: {
            title: "选项表单",
            type: "object",
            properties: {
                "title": {
                    type: "string",
                    title: "说明文字",
                    description:"最多500字",
                    maxLength:500
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
        "ui:widget": "files",
        "ui:placeholder": "请选择"
    },
    uiDefinitions: {
        "title": {
            "ui:widget": "textarea",
            "ui:placeholder": "请输入说明文字"
        },
        "printCheckbox": {
            "ui:widget": "checkbox",
        },
    }
}