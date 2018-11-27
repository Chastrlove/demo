import {observer} from 'mobx-react';
import * as React from 'react';
import TemplatesStore from "./templates.store";
import {Layout} from 'antd';
import ListView from "./list.view";
import DatasView from "./datas.view";

@observer
export default class TemplatesView extends React.Component {
    private store = new TemplatesStore();

    public render() {
        const store = this.store;
        return (
            <Layout>
                <Layout.Sider theme={"light"}>
                    <ListView store={store}/>
                </Layout.Sider>
                <Layout.Content><DatasView store={store}/></Layout.Content>
            </Layout>
        );
    }
}