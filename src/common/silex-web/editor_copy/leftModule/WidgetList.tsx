import * as _ from "lodash";
import * as React from "react";
import { observer } from "mobx-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TextWidget } from "../customWidget/TextWidget";
import { Store } from "../store/Store";
import { Entire } from "../api/api";
import * as style from "./WidgetListStyle.pcss";
import { DragBoxBean } from "../type";

const grid = 8;

const getListStyle = (isDraggingOver) => ({
    background: "#ffffff",
    width: 250,
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 11 * 2,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
});

@observer
export class WidgetList extends React.Component<{ store: Store }, any> {
    public addPropsToCenterForm = (item: DragBoxBean) => {
        this.props.store.addWidgetToCenter(item);
    };

    public render() {
        const store = this.props.store;

        const { widgetList = [] } = store.leftModule;

        return (
            <Droppable droppableId="box" isDropDisabled={true}>
                {(provided, snapshot) => {
                    console.log(provided, "provided");

                    return (
                        <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                            {_.map(widgetList, (item, index) => {
                                return (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={item.id}
                                        widget={item}
                                    >
                                        {(provided, snapshot) => {
                                            console.log(provided, "provided");
                                            console.log(snapshot, "snapshot");

                                            return (
                                                <>
                                                    <TextWidget
                                                        provided={provided}
                                                        widget={item}
                                                        key={Date.now()}
                                                        addPropsToCenterForm={
                                                            this.addPropsToCenterForm
                                                        }
                                                        store={store}
                                                    />
                                                    {
                                                        <div
                                                            style={{
                                                                display: snapshot.isDragging
                                                                    ? "block"
                                                                    : "none",
                                                            }}
                                                        >
                                                            <TextWidget
                                                                widget={item}
                                                                key={Date.now()}
                                                                addPropsToCenterForm={
                                                                    this.addPropsToCenterForm
                                                                }
                                                                store={store}
                                                            />
                                                        </div>
                                                    }
                                                </>
                                            );
                                        }}
                                    </Draggable>
                                );
                            })}
                        </div>
                    );
                }}
            </Droppable>
        );

        // return (
        //     <div className={style.widgetList}>
        //         {_.map(widgetList, (item: Entire, key) => {
        //             return (
        //                 <TextWidget
        //                     widget={item}
        //                     key={item.id}
        //                     addPropsToCenterForm={this.addPropsToCenterForm}
        //                     store={store}
        //                 />
        //             );
        //         })}
        //     </div>
        // );
    }
}
