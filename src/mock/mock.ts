export default () => {
    return Promise.resolve([
        {
            "id": "122232",
            "active": true,
            "canUpdate": false,
            "createBy": 1111,
            "createTime": 2222,
            "delete": true,
            "last": true,
            "release": "nisi Lorem aliqua sed",
            "schemaUpdate": true,
            "system": false,
            "updateBy": "aliquip exercitation ut",
            "updateTime": 3333,
            "schema": {
                "type": "string",
                "title": "多选框",
                "definitions": {
                    "title": {"type": "string", "title": "名称", "description": "注：最多20字", "maxLength": 20},
                    "enums": {
                        "type": "array",
                        "title": "选项",
                        "description": "最多50项，每项最多20字",
                        "maxItems": 50,
                        "minItems": 1,
                        "default": ["选项1", "选项2", "选项3"],
                        "items": {"type": "string", "default": ""}
                    },
                    "_ui$required": {"type": "boolean", "title": "验证", "description": "验证（如不勾选，提交表单时不校验）"},
                    "_ui$print": {"type": "boolean", "title": "打印", "description": "参与打印（如不勾选，打印时不显示该项）"}
                }
            },
            "uiSchema": {"ui$widget": "select", "ui$placeholder": "请选择"},
            "uiDefinitions": {
                "title": {"ui$widget": "text", "ui$placeholder": "请输入控件名称"},
                "enums": {"ui$widget": "text", "ui$placeholder": "请输入"},
                "_ui$required": {"ui$widget": "checkbox"},
                "_ui$print": {"ui$widget": "checkbox"}
            }
        },
    ])
}