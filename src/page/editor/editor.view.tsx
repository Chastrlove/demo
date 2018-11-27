import {observer} from 'mobx-react';
import * as React from 'react';
import EditorStore from "./editor.store";
import {Editor} from 'silex-editor/editor/Editor';
import mock from '../../mock/mock'

@observer
export default class EditorView extends React.Component {
    private editorStore = new EditorStore();

    public render() {
        return (
            <Editor
                loader={(store) => {
                    mock().then((data) => {
                        store.leftModule.setWidgetList(data);
                    })
                }}
            />
        );
    }
}