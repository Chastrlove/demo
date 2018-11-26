import {observer} from 'mobx-react';
import * as React from 'react';
import TemplatesStore from "./templates.store";

@observer
export default class TemplatesView extends React.Component {
    private store = new TemplatesStore();

    public render() {
        console.log(this.store);
        return (
            <div>
                TemplatesView
            </div>
        );
    }
}