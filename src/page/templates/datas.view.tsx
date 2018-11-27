import {observer} from 'mobx-react';
import * as React from 'react';
import {Table} from 'antd';
import TemplatesStore from './templates.store';
import {toJS} from 'mobx';

@observer
export default class DatasView extends React.Component<{ store: TemplatesStore }> {

    private columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }];


    public render() {

        const {data} = this.props.store;

        return (
            <Table pagination={false} columns={this.columns} dataSource={toJS(data)}/>
        );
    }
}