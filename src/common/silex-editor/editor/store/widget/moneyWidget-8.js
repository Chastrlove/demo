const money = {
    schema: {
        type: "string",
        title: "金额",
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
                "placeholder": {
                    type: "string",
                    title: "提示文案",
                    description:"最多50字",
                    maxLength:50
                },
                "daxieCheckbox": {
                    type: "array",
                    title: "大写",
                    items:{
                        type:"string",
                        enum:["显示大写（输入数字后自动显示大写）"]
                    },
                    default:"显示大写（输入数字后自动显示大写）"
                },
                "optionRadio": {
                    type: "string",
                    title: "取值规则",
                    enum: ["由提交人填写","计算公式"],
                    default:"由提交人填写"
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
        "placeholder": {
            "ui:widget": "text",
            "ui:placeholder": "请输入"
        },
        "daxieCheckbox": {
            "ui:widget": "checkbox",
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