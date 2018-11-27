import { Card } from "antd";
import * as React from "react";
import CustomTable from "./components/table";
import ToolBar from "./components/toolbar";
import { Provider } from "./store";
import { ISchemaTableProps, IState } from "silex-table/types";

class SilexTable<T extends IState = any> extends React.PureComponent<ISchemaTableProps<T>> {
    public render() {
        const { actions, initialState, getTableProps } = this.props;
        return (
            <Provider initialState={initialState}>
                <Card bodyStyle={{overflow:"auto"}} title={actions} extra={<ToolBar />}>
                    <CustomTable getTableProps={getTableProps} />
                </Card>
            </Provider>
        );
    }
}

export default SilexTable;
