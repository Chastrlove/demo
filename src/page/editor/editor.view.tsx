import {observer} from 'mobx-react';
import * as React from 'react';
import EditorStore from "./editor.store";
import {Editor} from 'silex-editor/editor/Editor';
import {Button, Card, message, Input} from "antd";
import {autorun, toJS} from "mobx";
import * as _ from 'lodash';

@observer
export default class EditorView extends React.Component {
    private editorStore = new EditorStore();

    private _onSubmit = async () => {
        const editorStore = this.editorStore;
        const title = editorStore.title;
        if (_.isEmpty(title)) {
            message.warn('请输入表单名称');
            return;
        }
        const {schema, uiSchema} = toJS(editorStore.formData);
        const now = Date.now();
        this.editorStore.addTemplate({
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
            uiSchema: _.assign(uiSchema, {
                ui$title: title
            })
        }).then((res: any) => {
            message.info('提交成功')
        }).catch(() => {
            message.error('新增失败')
        })
    };

    private changeTitle = (e) => {
        this.editorStore.setTitle(e.target.value)
    }

    public componentWillMount(): void {
        this.editorStore.setTitle(_.uniqueId('自定义表单模板_'));
    }

    public componentWillUnmount(): void {
        this.editorStore.setTitle();
    }

    public render() {
        const editorStore = this.editorStore;
        const title = editorStore.title;
        return (
            <Card
                title={<Input style={{width: "25%"}} value={title} placeholder={'请输入名称'} onChange={this.changeTitle}/>}
                extra={
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