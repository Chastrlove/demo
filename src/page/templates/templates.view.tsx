import {observer} from 'mobx-react';
import * as React from 'react';
import {Location} from "history";
import {Layout, Button, Icon, Card} from 'antd';
import {Link} from "react-router-dom";
import TemplatesStore from "./templates.store";
import * as styles from './templates.style.pcss';
import ListView from "./list.view";
import DatasView from "./datas.view";

@observer
export default class TemplatesView extends React.Component {
    private store = new TemplatesStore();

    public render() {
        const store = this.store;
        return (
            <Layout>
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
                    <Card
                        title={store.title}
                        extra={
                            <Link to={"/web"}>
                                <Button
                                    type="primary"
                                    style={{width: "100%"}}
                                    htmlType={"button"}
                                >
                                    <Icon type="plus"/> 新增表单
                                </Button>
                            </Link>
                        }
                    >
                        <DatasView store={store}/>
                    </Card>

                </Layout.Content>
            </Layout>
        );
    }
}