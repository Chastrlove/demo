import {observer} from 'mobx-react';
import * as React from 'react';
import EditorStore from "./editor.store";

@observer
export default class EditorView extends React.Component {
    private store = new EditorStore();

    public render() {
        console.log(this.store);
        return (
            <div>
                EditorView
            </div>
        );
    }
}