import {observer} from 'mobx-react';
import * as React from 'react';
import {Modal} from 'antd';
import TemplatesStore from "./templates.store";
import {MyForm} from 'silex-web/lib/form';
import appStore from 'entries/index/app.store';

@observer
export default class FormView extends React.Component<{ store: TemplatesStore }> {
    private onCancel = () => {
        this.props.store.setShowForm();
    }
    private onOk = () => {
        this.onCancel();
    }

    public render() {
        const store = this.props.store;
        return (
            <Modal
                width={600}
                visible={store.showForm}
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
            currentTemplate.schema ? <MyForm schema={schema} uiSchema={uiSchema} formData={currentData}/> : null
        );
    }
}
