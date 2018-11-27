import {observer} from 'mobx-react';
import * as React from 'react';
import H5Store from "./h5.store";

@observer
export default class H5View extends React.Component {
    private store = new H5Store();

    public render() {
        console.log(this.store);
        return (
            <div>
                H5View
            </div>
        );
    }
}