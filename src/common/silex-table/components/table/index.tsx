import { Table } from "antd";
import { ColumnProps } from "antd/es/table";
import update from "immutability-helper";
import * as _ from "lodash";
import * as React from "react";
import { DragDropContext, DragSource, DropTarget } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import SearchForm from "silex-form-core/SearchForm";
import Fields from "silex-form-core/fields";
import { defaultWidgets } from "silex-web/lib/widgets";
import { actions, Consumer } from "../../store";
import { IState } from "../../types";
import { IProperty } from "../../utils";
import { BodyRow } from "./BodyRow";

export interface ICustTableProps extends IState {
    getTableProps?: any;
}

export class CustTable extends React.PureComponent<ICustTableProps, any> {
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
                        <SearchForm
                            schema={this.props.schema}
                            uiSchema={this.props.uiSchema}
                            widgets={defaultWidgets}
                            fields={Fields}
                            ObjectFieldTemplate={(props) => {
                                return props.properties.map((prop) => prop.content);
                            }}
                            FieldTemplate={(props) => {
                                if (props.id === "root") {
                                    return props.children;
                                } else {
                                    return (
                                        <th style={{ backgroundColor: "inherit" }}>
                                            {props.children}
                                        </th>
                                    );
                                }
                            }}
                        />
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
    };

    public render() {
        const { properties, schema, data, uiSchema, getTableProps } = this.props;

        const ui$order = _.chain<string[]>(uiSchema.ui$order || []);
        const columns = CustTable.getColumns(properties, ui$order);
        let tablePorps = {
            columns: columns.value(),
            dataSource: data,
            components: this.getComponents(schema),
            onRow: (record, index) => ({
                index,
                moveRow: this.moveRow,
            }),
            pagination: false,
        };
        if (getTableProps) {
            tablePorps = {
                ...tablePorps,
                ...(getTableProps({
                    ui$order,
                    columns,
                    properties,
                    schema,
                    data,
                    uiSchema,
                }) || {}),
            };
        }
        return <Table {...(tablePorps as any)} />;
    }
}

export default DragDropContext(HTML5Backend)((props?: any) => {
    return (
        <Consumer
            select={[
                (state: IState) => state.search,
                (state: IState) => state.properties,
                (state: IState) => state.data,
                (state: IState) => state.schema,
                (state: IState) => state.uiSchema,
            ]}
        >
            {(search: any, properties: any, data: any, schema: any, uiSchema: any) => {
                return (
                    <CustTable
                        search={search}
                        properties={properties}
                        data={data}
                        schema={schema}
                        uiSchema={uiSchema}
                        getTableProps={props.getTableProps}
                    />
                )
            }}
        </Consumer>
    );
});
