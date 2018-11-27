import * as _ from "lodash";
import * as React from "react";
import { observer } from "mobx-react";
import * as classNames from "classnames";
import * as style from "./TextWidgetStyle.pcss";
import { Entire } from "../api/api";
import { ConnectDragSource, DragSource, DragSourceConnector, DragSourceMonitor } from "react-dnd";
import { DragBoxBean } from "../Types";
import { Store } from "../store/Store";

export interface TextWidgetBean {
    isDragging?: boolean;
    connectDragSource?: ConnectDragSource;
    widget: Entire;
    addPropsToCenterForm: (item: DragBoxBean) => any;
    store: Store;
}

const ItemTypes = {
    BOX: "box",
};

const boxSource = {
    beginDrag(props: TextWidgetBean) {
        return {
            widget: props.widget,
            store: props.store,
        };
    },

    endDrag(props: TextWidgetBean, monitor: DragSourceMonitor) {
        console.log("endDrag", `endDrag`);

        const item = monitor.getItem() as TextWidgetBean;
        const dropResult = monitor.getDropResult();

        if (item && item.store) {
            item.store.leftModule.setDragEventFlag();
        }

        console.log("dropResult:", dropResult);

        if (dropResult && dropResult.canDrop && dropResult.isOver) {
            props.addPropsToCenterForm({
                widget: item.widget,
                ...dropResult,
            });
        }
    },
};

@DragSource(
    ItemTypes.BOX,
    boxSource,
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)
@observer
export class TextWidget extends React.Component<TextWidgetBean, any> {
    public defaultProps = {
        schema: {
            title: "",
            required: false,
        },
        uiSchema: {
            uiDisabled: false,
            uiReadonly: false,
        },
    };

    public render() {
        const { schema, uiSchema } = _.merge({}, this.defaultProps, this.props.widget);

        console.log(this.defaultProps);

        const { title } = schema;
        const { ui$disabled, ui$readonly } = uiSchema;

        const className = classNames(style.textWidget, {
            [style.textWidgetDisabled]: ui$disabled || ui$readonly,
        });

        const { isDragging, connectDragSource } = this.props;

        console.log("isDragging", isDragging);

        return (
            connectDragSource &&
            connectDragSource(<div className={className}>{title}</div>, { dropEffect: "move" })
        );
    }
}
