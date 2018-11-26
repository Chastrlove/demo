import { Card } from "antd";
import * as React from "react";
import CustomTable from "./components/table";
import ToolBar from "./components/toolbar";
import Actions from "./components/toolbar/Actions";
import { Provider } from "./store";

class Example extends React.PureComponent {
    public render() {
        return (
            <Provider>
                <Card title={<Actions />} extra={<ToolBar />}>
                    <CustomTable />
                </Card>
            </Provider>
        );
    }
}

export default Example;
