import {observer} from "mobx-react";
import * as React from "react";
import {DragDropContextProvider} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import {CenterModule} from "./centerModule/CenterModule";
import * as style from "./EditorStyle.pcss";
import {WidgetList} from "./leftModule/WidgetList";
import {RightModule} from "./rightModule/RightModule";
import {Store} from "./store/Store";
import { Button, message } from 'antd';
import { toJS } from 'mobx';

@observer
export class Editor extends React.Component<{ loader?: (store: Store) => {} }, any> {
    public store: Store = new Store(this.props.loader);

    private _onSubmit = async () => {
      console.log(toJS(this.store.form));
      this.store.addWidget(toJS(this.store.form)).then((data: any) => {
        if(data.success) {
          message.success('Add Widget success!');
        }
        else {
          message.error('Add Widget fail!');
        }
      });
    };

    public render() {
        return (
            <div className={style.root}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <WidgetList store={this.store}/>
                    <div className={style.centerModuleContainer}>
                        <CenterModule id={"root_$_"} store={this.store}/>
                      <Button
                        type="primary"
                        size={`large`}
                        style={{position: 'absolute', top: 20, right: -100}}
                        onClick={this._onSubmit}
                      >
                        提交
                      </Button>
                    </div>
                </DragDropContextProvider>
                <RightModule store={this.store}/>
            </div>
        );
    }
}
