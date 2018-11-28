import {observer} from 'mobx-react';
import * as React from 'react';
import {Icon, Menu} from 'antd';
import TemplatesStore from "./templates.store";
import {autorun} from "mobx";
import appStore from 'entries/index/app.store';
import * as style from './list.style.pcss'

@observer
export default class ListView extends React.Component<{ store: TemplatesStore }> {

    private createItem = (item, index) => {
        return (
            <Menu.Item key={item.id}>
                <span>{item.uiSchema.ui$title}</span>
            </Menu.Item>
        )
    }

    private changeCurrentTemplateKeys = (data, dd = {}) => {
        const store = this.props.store;
        const key = data.key;
        const item = store.templates.find((temps) => temps.id === key);
        store.changeCurrentTemplateKeys({
            item,
            key
        });
    }

    private readonly disposer;

    constructor(props) {
        super(props);
        const store: TemplatesStore = props.store;
        this.disposer = autorun(() => {
            appStore.currentTemplate.id && store.loadData(appStore.currentTemplate).then(store.setDatas);
        });
        store.loadTemplates()
            .then(store.setTemplates)
            .then((templates) => {
                const template = templates[0];
                template && store.changeCurrentTemplateKeys({
                    item: template,
                    key: template.id
                })
            });
    }

    public componentWillUnmount(): void {
        this.disposer();
    }

    public render() {
        const {templates, currentTemplateKeys} = this.props.store;
        return (
            <Menu
                className={style.menu}
                onClick={this.changeCurrentTemplateKeys}
                mode="inline"
                selectedKeys={currentTemplateKeys}
            >
                {templates.map(this.createItem)}
            </Menu>
        );
    }
}
