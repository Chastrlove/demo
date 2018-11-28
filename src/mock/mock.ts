export default () => {
    return Promise.resolve([

        {
            "id": "122232",
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            "schema": {
                "type": "string",
                "title": "多选框",
                "enum": ["选项1", "选项2", "选项3"],
                "definitions": {
                    "title": {
                        "type": "string",
                        "title": "名称",
                        "description": "注：最多20字",
                        "maxLength": 20
                    },
                    "enum": {
                        "type": "array",
                        "title": "选项配置",
                        "description": "最多50项，每项最多20字",
                        "maxItems": 50,
                        "minItems": 1,
                        "items": {"type": "string", "default": "", "maxLength": 20}
                    },
                    "_ui$required": {"type": "boolean", "title": "验证", "description": "验证（如不勾选，提交表单时不校验）"},
                    "_ui$print": {"type": "boolean", "title": "打印", "description": "参与打印（如不勾选，打印时不显示该项）"},
                    "_ui$placeholder": {"type": "string", "title": "提示",},
                }
            },
            "uiSchema": {"ui$widget": "select", "ui$placeholder": "请选择"},
            "uiDefinitions": {
                "title": {"ui$widget": "text", "ui$placeholder": "请输入控件名称"},
                "enum": {"ui$widget": "text", "ui$placeholder": "请输入"},
                "_ui$required": {"ui$widget": "checkbox"},
                "_ui$print": {"ui$widget": "checkbox"},
                "_ui$placeholder": {"ui$widget": "text", "ui$placeholder": "请输入控件名称"}
            }
        },
        {
            id: 4334,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "string",
                title: "单选框",
                enum: ["选项1", "选项2", "选项3"],
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "enum": {
                        type: "array",
                        title: "选项",
                        description: "最多50项，每项最多20字",
                        maxItems: 50,
                        minItems: 1,
                        items: {
                            type: "string",
                            default: '选项'
                        },
                    },
                    "_ui$required": {"type": "boolean", "title": "验证", "description": "验证（如不勾选，提交表单时不校验）"},
                    "_ui$print": {"type": "boolean", "title": "打印", "description": "参与打印（如不勾选，打印时不显示该项）"},
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
                "enum": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 45454,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
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
                    "_ui$required": {"type": "boolean", "title": "验证", "description": "验证（如不勾选，提交表单时不校验）"},
                    "_ui$print": {"type": "boolean", "title": "打印", "description": "参与打印（如不勾选，打印时不显示该项）"},
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
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 767,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
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
                    "_ui$options": {
                        "type": "array",
                        title: "选项",
                        "items": {
                            "type": "string",
                            "enum": [
                                "只能选择一个部门"
                            ],
                            default: "只能选择一个部门"
                        },
                        "uniqueItems": true
                    },
                    "_ui$required": {"type": "boolean", "title": "验证", "description": "验证（如不勾选，提交表单时不校验）"},
                    "_ui$print": {"type": "boolean", "title": "打印", "description": "参与打印（如不勾选，打印时不显示该项）"},
                }
            },
            uiSchema: {
                "ui$placeholder": "请选择"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                },
                "_ui$options": {
                    "ui$widget": "checkboxes",
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 2323333,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
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
                    "format": {
                        "type": "string",
                        title: "日期格式",
                        enum: ["date-time", "date"],
                        default: "date-time"

                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
                    },
                    // _ui$widget:{
                    //     "type": "string",
                    //     default: "date-time"
                    // }
                }
            },
            uiSchema: {
                "ui$widget": "date-time",
                "ui$placeholder": "请选择"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                },
                "format": {
                    "ui$widget": "radio",
                    "ui$enums": [{
                        name: "年月日 时分"
                    }, {
                        name: "年月日"
                    }]
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
                // "_ui$widget": {
                //     "ui$widget": "text",
                // }
            }
        },
        {
            id: 232343,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "string",
                title: "部门",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "_ui$options": {
                        "type": "array",
                        title: "选项",
                        "items": {
                            "type": "string",
                            "enum": [
                                "只能选择一个部门"
                            ],
                            default: "只能选择一个部门"
                        },
                        "uniqueItems": true
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
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
                "_ui$options": {
                    "ui$widget": "checkboxes",
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 2323223323,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "string",
                title: "附件",
                definitions: {
                    "title": {
                        type: "string",
                        title: "说明文字",
                        description: "最多500字",
                        maxLength: 500
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
                    },
                }
            },
            uiSchema: {
                "ui$widget": "files",
                "ui$placeholder": "请选择"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "textarea",
                    "ui$placeholder": "请输入说明文字"
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 2323324443,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "string",
                title: "联系人",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "_ui$singleEmp": {
                        type: "boolean",
                        title: "可同时选择多人?",
                        default: false
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
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
                "_ui$singleEmp": {
                    "ui$widget": "checkbox",
                    "ui$options": {
                        "inline": true
                    }
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 232222223,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "number",
                title: "金额",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "_ui$placeholder": {
                        type: "string",
                        title: "提示文案",
                        description: "最多50字",
                        maxLength: 50
                    },
                    "_ui$capital": {
                        "type": "boolean",
                        title: "显示大写",
                        default: true
                    },
                    "_ui$valueRule": {
                        type: "string",
                        title: "取值规则",
                        enum: ["由提交人填写", "计算公式"],
                        default: "由提交人填写",
                        "uniqueItems": true
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
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
                "_ui$placeholder": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "_ui$capital": {
                    "ui$widget": "checkbox",
                },
                "_ui$valueRule": {
                    "ui$widget": "radio",
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 231111123,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "number",
                title: "数字输入框",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "_ui$placeholder": {
                        type: "string",
                        title: "提示文案",
                        description: "最多50字",
                        maxLength: 50
                    },
                    "_ui$ui$t": {
                        type: "string",
                        title: "单位",
                        description: "最多10字",
                        maxLength: 10
                    },
                    "_ui$capital": {
                        "type": "boolean",
                        title: "显示大写",
                        default: true
                    },
                    "_ui$valueRule": {
                        type: "string",
                        title: "取值规则",
                        enum: ["由提交人填写", "计算公式"],
                        default: "由提交人填写",
                        "uniqueItems": true
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
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
                "_ui$placeholder": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "_ui$ui$t": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "_ui$capital": {
                    "ui$widget": "checkbox",
                },
                "_ui$valueRule": {
                    "ui$widget": "radio",
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 244555323,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "string",
                title: "关联审批单",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description: "最多20字",
                        maxLength: 20
                    },
                    "_ui$related": {
                        type: "array",
                        title: "指定关联审批单类型",
                        items: {
                            type: "string",
                            enum: ["全部", "模板1", "模板2", "模板3"],
                            default: "全部",
                        },
                        "uniqueItems": true
                    },
                    "_ui$singleDep": {
                        type: "boolean",
                        title: "可同时选择多个部门?",
                        default: false
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
                    },
                }
            },
            uiSchema: {
                "ui$placeholder": "请选择"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                },
                "orderRelatedCheckbox": {
                    "ui$widget": "checkboxes",
                },
                "_ui$singleDep": {
                    "ui$widget": "checkbox",
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 232332243,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
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
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
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
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 23335678823,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
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
                    "_ui$placeholder": {
                        type: "string",
                        title: "提示文案",
                        description:"最多50字",
                        maxLength:50
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
                    },
                }
            },
            uiSchema: {
                "ui$widget": "textarea",
                "ui$rows": 3,
                "ui$placeholder": "请输入"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                },
                "_ui$placeholder": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 21112323323,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
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
                    "_ui$placeholder": {
                        type: "string",
                        title: "提示文案",
                        description:"最多50字",
                        maxLength:50
                    },
                    "_ui$required": {
                        "type": "boolean",
                        "title": "验证",
                        "description": "验证（如不勾选，提交表单时不校验）"
                    },
                    "_ui$print": {
                        "type": "boolean",
                        "title": "打印",
                        "description": "参与打印（如不勾选，打印时不显示该项）"
                    },
                }
            },
            uiSchema: {
                "ui$widget": "text",
                "ui$placeholder": "请输入"
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                },
                "_ui$placeholder": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入"
                },
                "_ui$required": {
                    "ui$widget": "checkbox",
                },
                "_ui$print": {
                    "ui$widget": "checkbox",
                },
            }
        },
        {
            id: 21112323323,
            active: true,
            canUpdate: false,
            createBy: "zzz",
            createTime: 333,
            _delete: true,
            last: true,
            release: "1.1",
            schemaUpdate: true,
            system: false,
            updateBy: "zz",
            updateTime: 444,
            schema: {
                type: "string",
                title: "空格",
                definitions: {
                    "title": {
                        type: "string",
                        title: "名称",
                        description:"最多20字",
                        maxLength:20
                    }
                }
            },
            uiSchema: {
                "ui$widget": "spaceWidget",
            },
            uiDefinitions: {
                "title": {
                    "ui$widget": "text",
                    "ui$placeholder": "请输入控件名称"
                }
            }
        }
    ])
}