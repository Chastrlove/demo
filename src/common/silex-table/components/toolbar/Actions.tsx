import { Button } from "antd";
import * as React from "react";

export default class Actions extends React.PureComponent {
    public render() {
        return (this.props.children || []).map(()=>{});
    }
    private clearAll = () => {};
}
