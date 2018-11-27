import {observer} from 'mobx-react';
import * as React from 'react';
import {Menu} from 'antd';
import TemplatesStore from "./templates.store";
import {autorun} from "mobx";
import appStore from 'app.store';

@observer
export default class ListView extends React.Component<{ store: TemplatesStore }> {

    private createItem = (item, index) => {
        return (
            <Menu.Item key={item.title}>
                <span>{item.title}</span>
            </Menu.Item>
        )
    }

    private changeCurrentTemplateKeys = (data) => {
        this.props.store.changeCurrentTemplateKeys(data);
    }

    private readonly disposer;

    constructor(props) {
        super(props);
        const store: TemplatesStore = props.store;
        this.disposer = autorun(() => {
            store.loadData(appStore.currentTemplate).then(store.setData);
        });
        store.loadTemplates()
            // .then(store.setTemplates)
            // .then((templates) => {
            //     const template = templates[0];
            //     this.changeCurrentTemplateKeys({
            //         item: template,
            //         key: template.title
            //     })
            // });
    }

    public componentWillUnmount(): void {
        this.disposer();
    }

    public render() {
        const {templates, currentTemplateKeys} = this.props.store;
        return (
            <Menu
                onClick={this.changeCurrentTemplateKeys}
                mode="inline"
                selectedKeys={currentTemplateKeys}
            >
                {templates.map(this.createItem)}
            </Menu>
        );
    }
}