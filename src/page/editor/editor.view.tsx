import {observer} from 'mobx-react';
import * as React from 'react';
import EditorStore from "./editor.store";
import {Editor} from 'silex-editor/editor/Editor';
import {Button, Card, message, Input} from "antd";
import {autorun, runInAction, toJS} from "mobx";
import * as _ from 'lodash';
import mock from "../../mock/mock";
import appStore from 'entries/index/app.store'
import * as style from './editor.style.pcss'

@observer
export default class EditorView extends React.Component {

    private type: 'add' | 'edit' = 'add';

    private setType = (type: 'add' | 'edit' = 'add') => this.type = type

    private editorStore = new EditorStore();

    private _onSubmit = async () => {
        const editorStore = this.editorStore;
        const title = editorStore.title;
        this.editorStore.setLoading();
        if (_.isEmpty(title)) {
            message.warn('请输入表单名称');
            return;
        }
        const {schema, uiSchema} = toJS(editorStore.formData);
        const now = Date.now();
        if (this.type === 'edit') {
            const currentTemplate = toJS(appStore.currentTemplate);
            currentTemplate.id && this.editorStore.editoTemplate({
                ...currentTemplate,
                ...{
                    schema,
                    uiSchema: _.assign(uiSchema, {
                        ui$title: title
                    })
                }
            }).then((res: any) => {
                this.editorStore.setLoading();
                message.info('提交成功')
            }).catch(() => {
                this.editorStore.setLoading();
                message.error('提交失败')
            })
        } else {
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
                this.editorStore.setLoading();
                message.info('提交成功')
            }).catch(() => {
                this.editorStore.setLoading();
                message.error('提交失败')
            })
        }

    };

    private changeTitle = (e) => {
        this.editorStore.setTitle(e.target.value)
    }

    public componentWillMount(): void {
        this.editorStore.setTitle(`自定义表单模板_${Date.now()}`);
    }

    public componentWillUnmount(): void {
        this.editorStore.setTitle();
        this.disposer();
        this.setType();
        appStore.setTemplatesType();
    }

    private disposer;

    public render() {
        const editorStore = this.editorStore;
        const currentTemplate = toJS(appStore.currentTemplate);
        const {
            uiSchema = {},
        } = currentTemplate;
        const title = uiSchema.ui$title ? uiSchema.ui$title : editorStore.title;
        return (
            <Card
                className={style.card}
                bodyStyle={{padding:0}}
                title={<Input style={{width: "25%"}} value={title} placeholder={'请输入名称'} onChange={this.changeTitle}/>}
                extra={
                    <Button
                        loading={editorStore.loading}
                        type="primary"
                        onClick={this._onSubmit}
                    >
                        提交
                    </Button>
                }
            >
                <Editor
                    loader={(store) => {
                        mock().then((widgetList) => {
                            runInAction(() => {
                                store.leftModule.setWidgetList(widgetList);
                                if (currentTemplate.id && appStore.templatesType === 'edit') {
                                    const {
                                        schema = {
                                            type: "object",
                                            properties: {}
                                        },
                                        uiSchema = {},
                                        uiDefinitions = {},
                                    } = currentTemplate;
                                    this.setType('edit');
                                    store.setForm({
                                        schema,
                                        uiSchema,
                                        formData: {},
                                        uiDefinitions,
                                        definitions: {},
                                    })
                                }
                            });
                            this.disposer = autorun(() => {
                                editorStore.setFormData(store.form);
                            })
                        })
                    }}
                />
            </Card>
        );
    }
}