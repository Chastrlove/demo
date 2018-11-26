import { Button, Checkbox, Form, Popover } from "antd";
import * as _ from "lodash";
import * as React from "react";
import { actions, connect } from "../../store";
import { IProperty } from "../../utils";

export interface IColumnsSelectorProps {
    properties: _.LoDashExplicitWrapper<_.Dictionary<IProperty>>;
    ui$order: _.LoDashExplicitWrapper<string[]>;
}
class ColumnsSelector extends React.PureComponent<IColumnsSelectorProps> {
    private static createBr = (value) => {
        return <br key={value} />;
    };
    public render() {
        const content = this.getContentByColumns().value();
        return (
            <Form.Item>
                <Popover content={content} title="Title">
                    <Button htmlType={"button"} shape="circle" icon="hdd" />
                </Popover>
            </Form.Item>
        );
    }
    private getContentByColumns() {
        const { properties } = this.props;
        return properties.map(this.createCheckbox).zip(
            properties
                .size()
                .times(ColumnsSelector.createBr)
                .dropRight()
                .value(),
        );
    }
    private onCheck = (property: IProperty, ui$order: _.LoDashExplicitWrapper<string[]>) => {
        return (e) => {
            actions.onChecked({
                checked: e.target.checked,
                dataIndex: property.dataIndex,
                ui$order,
            });
        };
    };
    private createCheckbox = (property: IProperty, key) => {
        const ui$order = this.props.ui$order;
        return (
            <Checkbox
                key={key}
                checked={ui$order.indexOf(key).value() >= 0}
                onChange={this.onCheck(property, ui$order)}
            >
                {property.title}
            </Checkbox>
        );
    };
}

export default connect<any>(({ properties, uiSchema }) => ({
    properties,
    ui$order: _.chain(uiSchema.ui$order),
}))(ColumnsSelector);
