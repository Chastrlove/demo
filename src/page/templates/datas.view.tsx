import {observer} from 'mobx-react';
import * as React from 'react';
import SilexTable from 'silex-table';
import TemplatesStore from './templates.store';
import {toJS} from 'mobx';
import {Link} from "react-router-dom";
import appStore from 'entries/index/app.store';
import {ISchemaTableProps} from "silex-table/types";
import {Button, Col, Icon, Row} from "antd";

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

    private showForm = () => {
        this.props.store.setShowForm();
    }

    private actions = (
        <div style={{width: "50%"}}>
            <Row gutter={8}>
                <Col className="gutter-row" span={12}>
                    <Link to={"/editor"}>
                        <Button
                            style={{width: "100%"}}
                            htmlType={"button"}
                        >
                            <Icon type="edit"/> 编辑模板
                        </Button>
                    </Link>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Button
                        type="primary"
                        style={{width: "100%"}}
                        htmlType={"button"}
                        onClick={this.showForm}
                    >
                        <Icon type="plus"/> 新增表单
                    </Button>
                </Col>
            </Row>
        </div>
    );

    private dataLoader = (...argument: any[]) => {
        console.log(argument);
    };

    private getTableProps = () =>{
        return []
    }


    public render() {

        const {datas} = this.props.store;
        const currentTemplate = toJS(appStore.currentTemplate);

        const state: ISchemaTableProps<any> = {
            initialState: {
                schema: currentTemplate.schema || {},
                uiSchema: currentTemplate.uiSchema || {},
                data: toJS(datas.map((data)=>data.data)),
                search: "search",
            },
            dataLoader: this.dataLoader,
            actions: this.actions,
        };

        return (
            <SilexTable {...state}/>
        );
    }
}