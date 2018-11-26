import { Form, Input } from "antd";
import * as React from "react";

export class Search extends React.PureComponent {
    public render() {
        return (
            <Form.Item>
                <Input.Search onSearch={this.onSearch} placeholder="输入需要搜的文字" />
            </Form.Item>
        );
    }
    private onSearch = () => {
        console.log("onSearch");
    };
}
