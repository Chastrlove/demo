import * as _ from "lodash";
import * as React from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import {
    ConnectDropTarget,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DropTarget,
} from "react-dnd";
import * as style from "./CenterModuleStyle.pcss";
import { MyForm } from "../../lib/form";
import { Store } from "../store/Store";
// import widgets from "silex-h5/widgets/index";
import widgets from "../../lib/mobileWidgets/index";
import SpaceWidget from "../customWidget/SpaceWidget";
import { JSONSchema } from "../api/api";
import { MobileFieldTemplate } from "../../lib/template/MobileFieldTemplate";
import { getObjectFieldTemplate } from "../template/ObjectFieldTemplate";
import { boxTarget, boxTargetSort, cardSource } from "../event/DragEvent";
import { runInAction, toJS } from "mobx";
import { WidgetPathBean } from "../type";
import { toJSDeep } from "../../lib/util";

export const mapProps = (props) => {
    const { schema, uiSchema } = props;

    const { title } = schema;

    return {
        label: title ? title : "",
        value: uiSchema && uiSchema.ui$placeholder ? uiSchema.ui$placeholder : "",
    };
};

const ItemTypes = {
    BOX: "box",
    CARD: "card",
};

export interface DustbinProps extends JSONSchema {
    connectDropTarget?: ConnectDropTarget;
    canDrop?: boolean;
    isOver?: boolean;
    allowedDropEffect?: string;
    store: Store;
    id?: string;
    index?: number;
}

export const getCustomWidgets = (
    store: Store,
    createOnClick,
    createDeleteWidget,
    currentClickPath,
) => {
    return _.mapValues({ ...widgets, spaceWidget: SpaceWidget }, (Widget) => {
        return (props) => {
            return (
                <CC
                    store={store}
                    Widget={Widget}
                    createOnClick={createOnClick}
                    createDeleteWidget={createDeleteWidget}
                    currentClickPath={currentClickPath}
                    {...props}
                />
            );
        };
    });
};

@DropTarget(ItemTypes.BOX, boxTarget(), (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
class CC extends React.Component<any, any> {
    public render() {
        const {
            connectDropTarget,
            store,
            createOnClick,
            createDeleteWidget,
            Widget,
            currentClickPath,
            ...others
        } = this.props;

        const { id } = this.props;

        const currentPath = store.getCurrentPath(id);
        return (
            connectDropTarget &&
            connectDropTarget(
                <div
                    className={classNames(style.widgetItem, {
                        [style.activeWidgetItem]:
                            currentPath.currentSchemaPath === currentClickPath,
                    })}
                >
                    <span className={style.deleteIcon} onClick={createDeleteWidget(id)}>
                        X
                    </span>
                    <AA
                        store={store}
                        createOnClick={createOnClick}
                        Widget={Widget}
                        {...others}
                        currentPath={currentPath}
                    />
                </div>,
            )
        );
    }
}

@DragSource(
    ItemTypes.CARD,
    cardSource,
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        };
    },
)
@DropTarget(ItemTypes.CARD, boxTargetSort, (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
})
class AA extends React.Component<any, any> {
    public render() {
        const props = this.props;

        const { connectDropTarget, connectDragSource, Widget, currentPath } = this.props;

        return (
            connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(
                    <div
                        onClick={this.props.createOnClick(currentPath)}
                        className={style.customWidget}
                    >
                        <Widget {...props} />
                    </div>,
                ),
            )
        );
    }
}

@DropTarget(ItemTypes.BOX, boxTarget("centerModule"), (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
@observer
export class CenterModule extends React.Component<any, any> {
    public onClickWidget = (currentPathObj: WidgetPathBean) => {
        return (e) => {
            const store = this.props.store as Store;

            runInAction(() => {
                store.setCurrentParentPath(currentPathObj);
                store.centerModuleStore.setCurrentClickPath(currentPathObj.currentSchemaPath);
            });
        };
    };

    public deleteWidget = (id$schema: string) => {
        return (e) => {
            e.preventDefault();
            const props = this.props;
            const store = props.store as Store;

            store.deleteWidget(id$schema);
        };
    };

    public render() {
        const store = this.props.store;
        const { schema, uiSchema } = store.form;
        const { currentClickPath } = store.centerModuleStore;

        const { connectDropTarget } = this.props;

        return (
            connectDropTarget &&
            connectDropTarget(
                <div className={style.centerModule}>
                    <MyForm
                        schema={toJSDeep(schema)}
                        uiSchema={toJSDeep(uiSchema)}
                        widgets={getCustomWidgets(
                            store,
                            this.onClickWidget,
                            this.deleteWidget,
                            currentClickPath,
                        )}
                        FieldTemplate={MobileFieldTemplate}
                        ObjectFieldTemplate={getObjectFieldTemplate(
                            store,
                            this.onClickWidget,
                            this.deleteWidget,
                            currentClickPath,
                        )}
                    >
                        <div style={{ display: "none" }}>submit</div>
                    </MyForm>
                </div>,
            )
        );
    }
}
