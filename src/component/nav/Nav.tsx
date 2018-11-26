import { Layout } from "antd";
import * as React from "react";
import {observer} from "mobx-react";
import HeaderMenu from "../headerMenu";
import * as styles from './NavStyle.pcss'

@observer
export class Nav extends React.PureComponent {
    public render() {
        return (
            <Layout.Header className={styles.nav}>
                <div className="logo"/>
                <HeaderMenu/>
            </Layout.Header>
        );
    }
}
