import { Form } from "antd";
import * as React from "react";
import ColumnsSelector from "./ColumnsSelector";
import FilterSwitch from "./FilterSwitch";
import { Search } from "./Search";

export default class ToolBar extends React.PureComponent {
    public render() {
        return (
            <Form layout="inline">
                <Search />
                <FilterSwitch />
                <ColumnsSelector />
            </Form>
        );
    }
}
