import * as React from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { WidgetList } from "./leftModule/WidgetList";
import { Store } from "./store/Store";
import * as style from "./EditorStyle.pcss";
import { CenterModule } from "./centerModule/CenterModule";
import { RightModule } from "./rightModule/RightModule";
import { observer } from "mobx-react";

@observer
export class Editor extends React.Component<any, any> {
    public store: Store = new Store();

    public render() {
        return (
            <div className={style.root}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <WidgetList store={this.store} />
                    <div className={style.centerModuleContainer}>
                        <CenterModule id={"root_$_"} store={this.store} />
                    </div>
                </DragDropContextProvider>
                <RightModule store={this.store} />
            </div>
        );
    }
}
