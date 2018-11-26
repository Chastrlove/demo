import * as React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { WidgetList } from "./leftModule/WidgetList";
import { Store } from "./store/Store";
import * as style from "./EditorStyle.pcss";
import { CenterModule } from "./centerModule/CenterModule";
import { RightModule } from "./rightModule/RightModule";
import { observer } from "mobx-react";

@observer
export class Editor extends React.Component<any, any> {
    public store: Store = new Store();

    public onDragEnd = () => {
        console.log("argus", arguments);
    };

    public render() {
        return (
            <div className={style.root}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <WidgetList store={this.store} />
                    <div className={style.centerModuleContainer}>
                        <CenterModule id={"root_$_"} store={this.store} />
                    </div>
                </DragDropContext>
                <RightModule store={this.store} />
            </div>
        );
    }
}
