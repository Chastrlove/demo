const costDepartment = {
    schema: {
        type: "string",
        title: "费用归属部门",
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
                    enum: ["只能选择一个部门"],
                    default:"只能选择一个部门"
                },
                "requiredCheckbox": {
                    type: "array",
                    title: "验证",
                    items:{
                        type:"string",
                        enum:["必填（系统默认必填，不可取消勾选）"]
                    },
                    readOnly:true
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