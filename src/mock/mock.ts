export default [
    {
        id: 122232,
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
        schema: {
            type: "string",
            title: "多选框",
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
                    "select": {
                        type: "array",
                        title: "选项",
                        description:"最多50项，每项最多20字",
                        maxItems:50,
                        minItems:1,
                        items:{
                            type:"string",
                            enum:["选项1","选项2","选项3"]
                        },
                    },
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items:{
                            type:"string",
                            enum:["必填（系统默认必填，不可取消勾选）"]
                        },
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
            "select": {
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
    },
    {
        id: 4334,
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
        schema: {
            type: "string",
            title: "城市",
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
                    "select": {
                        type: "array",
                        title: "选项",
                        description:"最多50项，每项最多20字",
                        maxItems:50,
                        minItems:1,
                        items:{
                            type:"string",
                            enum:["选项1","选项2","选项3"]
                        },
                    },
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items:{
                            type:"string",
                            enum:["必填（系统默认必填，不可取消勾选）"]
                        },
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
            "select": {
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
    },
    {
        id: 45454,
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
        schema: {
            type: "string",
            title: "城市",
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
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items:{
                            type:"string",
                            enum:["必填（系统默认必填，不可取消勾选）"]
                        },
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
            "requiredCheckbox": {
                "ui:widget": "checkbox",
            },
            "printCheckbox": {
                "ui:widget": "checkbox",
            },
        }
    },
    {
        id: 767,
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
    },
    {
        id: 2323,
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
        schema: {
            type: "string",
            title: "日期",
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
                        enum: ["年月日 时分","年月日"],
                        default:"年月日 时分"
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
            "ui:widget": "datetime",
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
]