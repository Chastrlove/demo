import { getParentPathByCuPath, Store } from "../store/Store";
import { DropTargetMonitor } from "react-dnd";
import { DustbinProps } from "../centerModule/CenterModule";

export const cardSource = {
    beginDrag(props: any) {
        return { ...props, index: props.index };
    },
    endDrag(...arg) {
        console.log("...arg", arg);
    },
};

export const boxTargetSort = {
    drop(props: any, monitor: DropTargetMonitor, component: any | null) {
        if (!component) {
            return null;
        }

        const item = monitor.getItem();

        const dragIndex = item.index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        if (props.id === "root_$_" || props.id === "root") {
            return;
        }

        // Determine rectangle on screen
        // const hoverBoundingRect = (findDOMNode(component) as Element).getBoundingClientRect();
        //
        // // Get vertical middle
        // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        //
        // // Determine mouse position
        // const clientOffset = monitor.getClientOffset();
        //
        // // Get pixels to the top
        // const hoverClientY = (clientOffset as any).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //     return;
        // }
        //
        // // Dragging upwards
        // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //     return;
        // }

        const isObject = _.includes(
            (component!!.props.store as Store).findCurrentKey(props.id),
            "object",
        );

        // Time to actually perform the action
        (component!!.props.store as Store).dragSortOpration(
            item.id,
            dragIndex,
            props.id,
            hoverIndex,
            isObject,
        );

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        // monitor.getItem().index = hoverIndex;
    },
};

enum TargetEnum {
    widgetTarget = "widgetTarget",
    centerModule = "centerModule",
    fieldTarget = "fieldTarget",
    fieldSetTarget = "fieldSetTarget",
}

export const boxTarget = (target = TargetEnum.widgetTarget) => {
    return {
        drop(props, monitor, component) {
            if (!component) {
                return;
            }

            if (props && props.store) {
                const { leftModule } = props.store as Store;

                if (leftModule.dragEventFlag) {
                    console.log("dropTarget", `${target}进来了！！！`);

                    leftModule.setDragEventFlag();

                    const { canDrop, isOver } = component.props as DustbinProps;

                    if (target === TargetEnum.centerModule) {
                        const { id = "root_$_", index = 0 } = props as DustbinProps;

                        return { canDrop, isOver, cuParentPath: id, index };
                    } else if (
                        target === TargetEnum.widgetTarget ||
                        target === TargetEnum.fieldTarget ||
                        target === TargetEnum.fieldSetTarget
                    ) {
                        const { id, index = 0 } = props as DustbinProps;
                        const { type } = props.schema;

                        const cuParentPath =
                            type === "object" && target === TargetEnum.fieldTarget
                                ? id
                                : getParentPathByCuPath(id);

                        return {
                            canDrop,
                            isOver,
                            cuParentPath,
                            index,
                        };
                    }
                }
            }
        },
    };
};
