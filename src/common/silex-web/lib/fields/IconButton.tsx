import * as React from "react";
import { Icon, Button, Col } from "antd";

export default function IconButton(props) {
    const { type = "default", icon = "plus", className, span = 6, ...otherProps } = props;
    return (
        <Col span={span}>
            <Button type={type} shape="circle" icon={icon} className={className} {...otherProps} />
        </Col>
    );
}
