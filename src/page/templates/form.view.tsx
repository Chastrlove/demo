import {observer} from 'mobx-react';
import * as React from 'react';
import {message, Modal} from 'antd';
import TemplatesStore from "./templates.store";
import {MyForm} from 'silex-web/lib/form';
import appStore from 'entries/index/app.store';
import {toJS} from "mobx";

@observer
export default class FormView extends React.Component<{ store: TemplatesStore }> {
    private onCancel = () => {
        const store = this.props.store;
        store.setShowForm();
        store.setCurrentData();

    }
    private onOk = () => {
        this.props.store.submit().then((res) => {
            message.info('操作成功')
        }).catch((res) => {
            message.info(res.msg)
        });
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

    private onChange = (formargs) => {
        const {formData} = formargs;
        this.props.store.setData(formData);
    };

    public render() {
        const currentData = this.props.store.currentData;
        const currentTemplate = appStore.currentTemplate;
        const {schema, uiSchema} = currentTemplate;
        return (
            currentTemplate.schema ?
                <MyForm
                    onChange={this.onChange}
                    schema={schema}
                    uiSchema={uiSchema}
                    formData={toJS(currentData.data)}
                /> : null
        );
    }
}