import { Input, Table } from "antd";
import { ColumnProps } from "antd/es/table";
import update from "immutability-helper";
import * as _ from "lodash";
import * as React from "react";
import { DragDropContext, DragSource, DropTarget } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
// import { getWidget } from "../../../../silex-shared/src/utils";
import { actions, connect } from "../../store";
import { IState } from "../../types";
import { IProperty } from "../../utils";
// import widgets from "../../widgets";
import { BodyRow } from "./BodyRow";

export class CustTable extends React.PureComponent<IState, any> {
    private static rowSource = {
        beginDrag(props) {
            return {
                index: props.index,
            };
        },
    };

    private static rowTarget = {
        drop(props, monitor) {
            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            // Time to actually perform the action
            props.moveRow(dragIndex, hoverIndex);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().index = hoverIndex;
        },
    };

    private static DragableBodyRow = DropTarget("row", CustTable.rowTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        sourceClientOffset: monitor.getSourceClientOffset(),
    }))(
        DragSource("row", CustTable.rowSource, (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            dragRow: monitor.getItem(),
            clientOffset: monitor.getClientOffset(),
            initialClientOffset: monitor.getInitialClientOffset(),
        }))(BodyRow),
    );
    private static getColumns<T = any>(
        properties: _.LoDashExplicitWrapper<_.Dictionary<IProperty>>,
        ui$order: _.LoDashExplicitWrapper<string[]>,
        options: ColumnProps<T> = {},
    ): _.LoDashExplicitWrapper<Array<ColumnProps<T>>> {
        return ui$order
            .map<string, ColumnProps<T> | false>((key, index) => {
                const property = properties.get(key);
                if (!property.value()) {
                    return false;
                }
                return {
                    ...{
                        key,
                        dataIndex: key,
                        title: property
                            .get("title")
                            .defaultTo("")
                            .value(),
                        width: 80,
                        resizable: true,
                        checked: true,
                    },
                    ...options,
                };
            })
            .compact();
    }
    private readonly headerRow = {
        search: (properties, props?) => {
            return (
                <>
                    <tr key={0}>{props.children}</tr>
                    <tr key={1}>
                        {props.children.map((prop) => {
                            const key = prop.key;
                            const property = properties[key];
                            // const Widget = getWidget(property, "", widgets);
                            return (
                                <th style={{ background: "inherit" }} key={key}>
                                    {/*<Widget schema={property} />*/}
                                    <Input placeholder={`请输入 ${property.title || ""}`} />
                                </th>
                            );
                        })}
                    </tr>
                </>
            );
        },
        unSearch: (properties, props) => {
            return <tr key={0}>{props.children}</tr>;
        },
    };
    public getComponents = (schema, uiSchema?) => {
        const properties = schema.properties;
        return {
            header: {
                row: (props, ...argument) => {
                    const { search } = this.props;
                    return this.headerRow[search](properties, props);
                },
            },
            body: {
                row: CustTable.DragableBodyRow,
            },
        };
    };

    public moveRow = (dragIndex, hoverIndex) => {
        const { data } = this.props;
        const dragRow = data[dragIndex];

        actions.changeAll(
            update(this.props, {
                data: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
                },
            }),
        );

        // this.setState(aaa);
    };
    public render() {
        const { properties, schema, data, uiSchema } = this.props;
        const ui$order = _.chain<string[]>(uiSchema.ui$order || []);
        const columns = CustTable.getColumns(properties, ui$order);
        return (
            <Table
                className={"components-table-demo-drag-sorting"}
                columns={columns.value()}
                dataSource={data}
                components={this.getComponents(schema)}
                onRow={(record, index) => ({
                    index,
                    moveRow: this.moveRow,
                })}
            />
        );
    }
}

export default connect<any>((state) => state)(DragDropContext(HTML5Backend)(CustTable));
