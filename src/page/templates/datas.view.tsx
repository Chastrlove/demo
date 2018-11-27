import {observer} from 'mobx-react';
import * as React from 'react';
import {Table} from 'antd';
import TemplatesStore from './templates.store';
import {toJS} from 'mobx';

@observer
export default class DatasView extends React.Component<{ store: TemplatesStore }> {

    private createEdit = (item) => () => this.props.store.setCurrentDataAndShow(item);

    private columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }, {
        render: (text, record) => <a href="javascript:;" onClick={this.createEdit(record)}>编辑</a>
    }];


    public render() {

        const {datas} = this.props.store;

        return (
            <Table pagination={false} columns={this.columns} dataSource={toJS(datas)}/>
        );
    }
}