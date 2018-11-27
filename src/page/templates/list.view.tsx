import {observer} from 'mobx-react';
import * as React from 'react';
import {Menu} from 'antd';
import TemplatesStore from "./templates.store";

@observer
export default class ListView extends React.Component<{ store: TemplatesStore }> {

    private createItem = (item, index) => {
        return (
            <Menu.Item key={index}>
                <span>{item.title}</span>
            </Menu.Item>
        )
    }

    public render() {
        return (
            <Menu
                mode="inline"
            >
                {this.props.store.templates.map(this.createItem)}
            </Menu>
        );
    }
}