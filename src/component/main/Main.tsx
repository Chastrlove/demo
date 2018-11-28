import { Layout } from "antd";
import * as React from "react";
import { observer } from "mobx-react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Nav from "../nav";
import * as styles from "./MainStyle.pcss";
import appStore from '../../entries/index/app.store';

@observer
export default class Main extends React.Component<{}> {
    public render() {
        return (
            <HashRouter>
                <Layout className={styles.layout}>
                    <Nav/>
                    <Layout.Content style={{flex:1}}>
                        <Switch>
                            {appStore.routes.map(this.createRoute)}
                            <Redirect exact={true} strict={true} from="/" to="/templates"/>
                            <Redirect to={"/error"}/>
                        </Switch>
                    </Layout.Content>
                </Layout>
            </HashRouter>
        );
    }

    private renderRoute = (render) => {
        return (props) => {
            return render(props);
        };
    };

    private createRoute = ({ path, render }, index) => {
        return (
            <Route
                extra={true}
                strict={true}
                key={path || index}
                path={path}
                render={this.renderRoute(render)}
            />
        );
    };
}
