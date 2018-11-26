import {Menu} from "antd";
import * as React from "react";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import * as styles from "./HeaderMenuStyle.pcss";
import appStore from "../../app.store";

export interface IItem {
    id: string;
    name: string;
    icon: string;
    path: string;
}

const MenuItem = Menu.Item;

@observer
export default class HeaderMenu extends React.Component {
    private createItem = (item: IItem) => {
        return (
            <MenuItem key={item.id}>
                <Link to={item.path}>{item.name}</Link>
            </MenuItem>
        );
    };

    private static readonly changeMenu = ({item, key, keyPath}) => {
        appStore.changeMenu(keyPath);
    };

    public render() {
        const {selectedKeys, masterMenuData} = appStore;
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={selectedKeys}
                className={styles.headerMenu}
                onClick={HeaderMenu.changeMenu}
            >
                {masterMenuData.map(this.createItem)}
            </Menu>
        );
    }
}