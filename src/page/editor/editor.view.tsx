import {observer} from 'mobx-react';
import * as React from 'react';
import EditorStore from "./editor.store";
import {Editor} from 'silex-editor/editor/Editor';
import {Button, Card, message, Input} from "antd";
import {autorun, toJS} from "mobx";

@observer
export default class EditorView extends React.Component {
    private editorStore = new EditorStore();

    private _onSubmit = async () => {
        const {schema, uiSchema} = toJS(this.editorStore.formData);
        const now = Date.now();
        this.editorStore.addWidget({
            "id": now,
            "active": true,
            "canUpdate": false,
            "createBy": 'zz',
            "createTime": now,
            "delete": true,
            "last": true,
            "release": '1.0',
            "schemaUpdate": true,
            "system": false,
            "updateBy": "zz",
            "updateTime": now,
            schema,
            uiSchema
        }).then((res: any) => {
            if (res) {
                if (res.errorCode < 400) {
                    message.info(res.msg)
                } else {
                    message.error(res.msg)
                }
            } else {
                throw new Error('sss');
            }
        }).catch(() => {
            message.error('新增失败')
        })
    };

    private changeTitle = (e) => {
        this.editorStore.setTitle(e.target.value)
    }

    public componentWillUnmount(): void {
        this.editorStore.setTitle();
    }

    public render() {
        const editorStore = this.editorStore;
        const title = editorStore.title;
        return (
            <Card title={<Input style={{width:"25%"}} value={title} placeholder={'请输入名称'} onChange={this.changeTitle}/>} extra={
                <Button
                    type="primary"
                    onClick={this._onSubmit}
                >
                    提交
                </Button>
            }
            >
                <Editor
                    loader={(store) => {
                        editorStore.loadWidgets().then((data) => {
                            store.leftModule.setWidgetList(data);
                            autorun(() => {
                                editorStore.setFormData(store.form);
                            })
                        })
                    }}
                />
            </Card>
        );
    }
}