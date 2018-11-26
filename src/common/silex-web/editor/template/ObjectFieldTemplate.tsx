import * as _ from "lodash";
import * as React from "react";
import { JSONSchema, UISchema } from "../api/api";
import { DragSource, DragSourceConnector, DragSourceMonitor, DropTarget } from "react-dnd";
import classNames from "classnames";
import { boxTarget, boxTargetSort, cardSource } from "../event/DragEvent";
import { isRoot, Store } from "../store/Store";
import * as style from "./ObjectFiledStyle.pcss";

const ItemTypes = {
    BOX: "box",
    CARD: "card",
};

interface ObjectFieldTemplateBean {
    id;
    title: string;
    description: string;
    TitleField: any;
    DescriptionField: any;
    properties: any[];
    name: string;
    readonly: boolean;
    disabled: boolean;
    required: boolean;
    idSchema: any;
    uiSchema: UISchema;
    schema: JSONSchema;
    formData: any;
    formContext: string;
    index: number;
}

export const getObjectFieldTemplate = (
    store: Store,
    createOnClick,
    createDeleteWidget,
    currentClickPath,
) => {
    return (props) => {
        return (
            <FieldSetContainer
                store={store}
                createOnClick={createOnClick}
                createDeleteWidget={createDeleteWidget}
                currentClickPath={currentClickPath}
                {...props}
            />
        );
    };
};

@DropTarget(ItemTypes.BOX, boxTarget("fieldTarget"), (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
export class BB extends React.Component<any, any> {
    public render() {
        const { connectDropTarget, store, createOnClick, ...others } = this.props;

        return (
            connectDropTarget &&
            connectDropTarget(
                <div>
                    <ObjectFieldTemplate store={store} createOnClick={createOnClick} {...others} />
                </div>,
            )
        );
    }
}

@DropTarget(ItemTypes.BOX, boxTarget("fieldSetTarget"), (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
export class FieldSetContainer extends React.Component<any, any> {
    public render() {
        const { connectDropTarget, store, createOnClick, ...others } = this.props;

        const isObjectRoot = isRoot(this.props.id);

        return (
            connectDropTarget &&
            connectDropTarget(
                <div
                    className={classNames({
                        [style.fieldsetContainer]: !isObjectRoot,
                    })}
                >
                    <BB store={store} createOnClick={createOnClick} {...others} />
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
export class ObjectFieldTemplate extends React.Component<any, any> {
    public render() {
        const props = this.props;
        const { TitleField, DescriptionField, currentClickPath } = props;
        const store: Store = this.props.store;

        const currentPath = store.getCurrentPath(props.id);

        const { connectDropTarget, connectDragSource } = this.props;

        const isObjectRoot = isRoot(props.id);

        return (
            connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(
                    <fieldset
                        className={classNames({
                            [style.objectFieldSet]: !isObjectRoot,
                            [style.activeFieldSetItem]:
                                currentPath.currentSchemaPath === currentClickPath,
                        })}
                    >
                        {isObjectRoot ? null : (
                            <span
                                className={style.deleteIcon}
                                onClick={this.props.createDeleteWidget(this.props.id)}
                            >
                                X
                            </span>
                        )}
                        <div
                            onClick={isObjectRoot ? _.noop : this.props.createOnClick(currentPath)}
                        >
                            {(props.uiSchema.ui$title || props.title) && (
                                <div
                                    className={style.titleField}
                                    style={{
                                        fontSize: "14px",
                                    }}
                                >
                                    <TitleField
                                        id={`${props.idSchema.$id}__title`}
                                        title={props.title || props.uiSchema.ui$title}
                                        required={props.required}
                                        formContext={props.formContext}
                                    />
                                </div>
                            )}
                            {props.description && (
                                <DescriptionField
                                    id={`${props.idSchema.$id}__description`}
                                    description={props.description}
                                    formContext={props.formContext}
                                />
                            )}
                        </div>
                        <div className={style.propsContainer}>
                            {props.properties.map((prop) => prop.content)}
                        </div>
                    </fieldset>,
                ),
            )
        );
    }
}
