import {observer} from 'mobx-react';
import * as React from 'react';
import {Modal} from 'antd';
import TemplatesStore from "./templates.store";
import appStore from 'entries/index/app.store';
import SilexH5 from "silex-h5";

@observer
export default class H5View extends React.Component<{ store: TemplatesStore }> {
    private onCancel = () => {
        this.props.store.setShowH5Form();
    }
    private onOk = () => {
        this.onCancel();
    }

    public render() {
        const store = this.props.store;
        return (
            <Modal
                width={600}
                visible={store.showH5Form}
                onCancel={this.onCancel}
                onOk={this.onOk}
            >
                <TempForm store={store}/>
            </Modal>
        );
    }
}

@observer
class TempForm extends React.Component<{ store: TemplatesStore }> {
    public render() {
        const currentData = this.props.store.currentData;
        const currentTemplate = appStore.currentTemplate;
        const {schema, uiSchema} = currentTemplate;
        return (
            currentTemplate.schema ? <SilexH5 schema={schema} uiSchema={uiSchema} formData={currentData}/> : null
        );
    }
}