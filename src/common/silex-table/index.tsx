import {Card} from "antd";
import * as React from "react";
import CustomTable from "./components/table";
import ToolBar from "./components/toolbar";
import {Provider, actions} from "./store";
import {ISchemaTableProps, IState} from "silex-table/types";
import * as _ from 'lodash';

class SilexTable<T extends IState = any> extends React.PureComponent<ISchemaTableProps<T>> {
    public componentWillReceiveProps(nextProps: Readonly<ISchemaTableProps<T>>, nextContext: any): void {
        const initialState = nextProps.initialState;
        initialState.properties = _.chain(initialState.schema.properties).mapValues((property, key) => {
            return {...{dataIndex: key}, ...property};
        })
        actions.changeAll(initialState);
    }

    public render() {
        const {actions, initialState, getTableProps} = this.props;
        initialState.properties = _.chain(initialState.schema.properties).mapValues((property, key) => {
            return {...{dataIndex: key}, ...property};
        });
        return (
            <Provider initialState={initialState}>
                <Card bodyStyle={{overflow: "auto"}} title={actions} extra={<ToolBar/>}>
                    <CustomTable getTableProps={getTableProps}/>
                </Card>
            </Provider>
        );
    }
}

export default SilexTable;
