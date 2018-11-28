import {observer} from 'mobx-react';
import * as React from 'react';
import {Location} from "history";
import {Layout, Button, Icon, Card, Row, Col} from 'antd';
import {Link} from "react-router-dom";
import TemplatesStore from "./templates.store";
import * as styles from './templates.style.pcss';
import ListView from "./list.view";
import DatasView from "./datas.view";
import FormView from "./form.view";
import H5View from "./h5.view";
import appStore from '../../entries/index/app.store'

@observer
export default class TemplatesView extends React.Component {
    private store = new TemplatesStore();

    private showForm = () => {
        this.store.setShowForm();
    }

    private showH5Form = () => {
        this.store.setShowH5Form();
    }

    private editTemplate = () => {
        console.log(appStore.currentTemplate)
    }

    public render() {
        const store = this.store;
        return (
            <Layout style={{height:'100%'}}>
                <Layout.Sider theme={"light"} width={250}>
                    <div className={styles.temp}>
                        <Link to={"/editor"}>
                            <Button
                                type="dashed"
                                style={{width: "100%"}}
                                htmlType={"button"}
                            >
                                <Icon type="plus"/> 新增模板
                            </Button>
                        </Link>
                    </div>
                    <ListView store={store}/>
                </Layout.Sider>
                <Layout.Content>
                    <DatasView store={store}/>
                </Layout.Content>
                <FormView store={store}/>
                <H5View store={store}/>
            </Layout>
        );
    }
}