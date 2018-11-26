import {observer} from 'mobx-react';
import * as React from 'react';
import DatasStore from "./datas.store";

@observer
export default class DatasView extends React.Component {
    private store = new DatasStore();

    public render() {
        console.log(this.store);
        return (
            <div>
                DatasView
            </div>
        );
    }
}