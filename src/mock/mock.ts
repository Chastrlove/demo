export default () => {
    return Promise.resolve([
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
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "注：最多20字",
                        maxLength: 20
                    },
                    "select":{
                        "type":"array",
                        "title":"选项",
                        "description":"最多50项，每项最多20字",
                        "maxItems": 50,
                        "minItems": 1,
                        "default": ["选项1", "选项2", "选项3"],
                        "items": {
                            "type": "string",
                            "default": ""
                        }
                    },
                    "$ui$required": {
                        type: "boolean",
                        title: "验证",
                        description: "验证（如不勾选，提交表单时不校验）"
                    },
                    "$ui$print": {
                        type: "boolean",
                        title: "打印",
                        description: "参与打印（如不勾选，打印时不显示该项）"
                    },
                }
            },
            uiSchema: {
                "ui$widget": "select",
                "ui$placeholder": "请选择"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                },
                "select": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "$ui$required": {
                    "ui$widget": "checkbox",
                },
                "$ui$print": {
                    "ui$widget": "checkbox",
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
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "select": {
                        type: "array",
                        title: "选项",
                        description: "最多50项，每项最多20字",
                        maxItems: 50,
                        minItems: 1,
                        items: {
                            type: "string",
                            enum: ["选项1", "选项2", "选项3"]
                        },
                    },
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items: {
                            type: "string",
                            enum: ["必填（系统默认必填，不可取消勾选）"]
                        },
                    },
                    "printCheckbox": {
                        type: "array",
                        title: "打印",
                        items: {
                            type: "string",
                            enum: ["参与打印（如不勾选，打印时不显示该项）"]
                        },
                        default: "参与打印（如不勾选，打印时不显示该项）"
                    },
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
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items: {
                            type: "string",
                            enum: ["必填（系统默认必填，不可取消勾选）"]
                        },
                    },
                    "printCheckbox": {
                        type: "array",
                        title: "打印",
                        items: {
                            type: "string",
                            enum: ["参与打印（如不勾选，打印时不显示该项）"]
                        },
                        default: "参与打印（如不勾选，打印时不显示该项）"
                    },
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
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "optionRadio": {
                        type: "string",
                        title: "选项",
                        enum: ["只能选择一个部门"],
                        default: "只能选择一个部门"
                    },
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items: {
                            type: "string",
                            enum: ["必填（系统默认必填，不可取消勾选）"]
                        },
                        readOnly: true
                    },
                    "printCheckbox": {
                        type: "array",
                        title: "打印",
                        items: {
                            type: "string",
                            enum: ["参与打印（如不勾选，打印时不显示该项）"]
                        },
                        default: "参与打印（如不勾选，打印时不显示该项）"
                    },
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
            id: 2323333,
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
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "optionRadio": {
                        type: "string",
                        title: "选项",
                        enum: ["年月日 时分", "年月日"],
                        default: "年月日 时分"
                    },
                    "requiredCheckbox": {
                        type: "array",
                        title: "验证",
                        items: {
                            type: "string",
                            enum: ["必填"]
                        }
                    },
                    "printCheckbox": {
                        type: "array",
                        title: "打印",
                        items: {
                            type: "string",
                            enum: ["参与打印（如不勾选，打印时不显示该项）"]
                        },
                        default: "参与打印（如不勾选，打印时不显示该项）"
                    },
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
        },
        {
            id: 232343,
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
                title: "部门",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description:"最多20字",
                        maxLength:20
                    },
                    "optionRadio": {
                        type: "string",
                        title: "选项",
                        enum: ["只能选择一个部门","可同时选择多个部门"],
                        default:"只能选择一个部门"
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
        },
        {
            id: 2323223323,
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
                title: "附件",
                definitions: {
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
        },
        {
            id: 224534323,
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
                title: "附件",
                definitions: {
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
            },
            uiSchema: {
                "ui:widget": "files",
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
            id: 2323324443,
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
                title: "联系人",
                definitions: {
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
        },
        {
            id: 232222223,
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
                title: "金额",
                definitions: {
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
        },
        {
            id: 231111123,
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
                title: "数字输入框",
                definitions: {
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
                    "unit": {
                        type: "string",
                        title: "单位",
                        description:"最多10字",
                        maxLength:10
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
                "unit": {
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
        },
        {
            id: 244555323,
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
                title: "关联审批单",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description:"最多20字",
                        maxLength:20
                    },
                    "orderRelatedCheckbox": {
                        type: "array",
                        title: "指定关联审批单类型",
                        items:{
                            type:"string",
                            enum:["全部","模板1","模板2","模板3"]
                        },
                        default:"全部"
                    },
                    "optionRadio": {
                        type: "string",
                        title: "选项",
                        enum: ["只能选择一个部门","可同时选择多个部门"],
                        default:"只能选择一个部门"
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
            },
            uiSchema: {
                "ui:placeholder": "请选择"
            },
            uiDefinitions: {
                "title": {
                    "ui:widget": "text",
                    "ui:placeholder": "请输入控件名称"
                },
                "orderRelatedCheckbox":{
                    "ui:widget": "checkboxes",
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
            id: 232332243,
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
                title: "项目",
                definitions: {
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
            id: 23335678823,
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
                title: "多行输入框",
                maxLength: 2000,
                definitions: {
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
        },
        {
            id: 21112323323,
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
                title: "单行输入框",
                maxLength:200,
                definitions: {
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
            },
            uiSchema: {
                "ui:widget": "text",
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
    ])
}