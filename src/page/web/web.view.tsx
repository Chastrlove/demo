import {observer} from 'mobx-react';
import * as React from 'react';
import WebStore from "./web.store";

@observer
export default class WebView extends React.Component {
    private store = new WebStore();

    public render() {
        console.log(this.store);
        return (
            <div>
                WebView
            </div>
        );
    }
}