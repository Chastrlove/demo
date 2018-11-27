import {observer} from 'mobx-react';
import * as React from 'react';
import EditorStore from "./editor.store";
import {Editor} from 'silex-editor/editor/Editor';
import mock from '../../mock/mock'
import {Button, Card, message} from "antd";
import {toJS} from "mobx";

@observer
export default class EditorView extends React.Component {
    private editorStore = new EditorStore();

    private _onSubmit = async () => {
        // this.store.addWidget(toJS(this.store.form)).then((data: any) => {
        //     if(data.success) {
        //         message.success('Add Widget success!');
        //     }
        //     else {
        //         message.error('Add Widget fail!');
        //     }
        // });
    };

    public render() {
        return (
            <Card title={"编辑"} extra={
                <Button
                    type="primary"
                    size={`large`}
                    style={{position: 'absolute', top: 20, right: -100}}
                    onClick={this._onSubmit}
                >
                    提交
                </Button>
            }
            >
                <Editor
                    loader={(store) => {
                        this.editorStore.loadWidgets().then((data) => {
                            store.leftModule.setWidgetList(data);
                        })
                    }}
                />
            </Card>
        );
    }
}