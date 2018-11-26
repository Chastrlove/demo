import * as _ from "lodash";
import * as React from "react";
import { observer } from "mobx-react";
import { TextWidget } from "../customWidget/TextWidget";
import { Store } from "../store/Store";
import { Entire } from "../api/api";
import * as style from "./WidgetListStyle.pcss";
import { DragBoxBean } from "../type";

@observer
export class WidgetList extends React.Component<{ store: Store }, any> {
    public addPropsToCenterForm = (item: DragBoxBean) => {
        this.props.store.addWidgetToCenter(item);
    };

    public render() {
        const store = this.props.store;

        const { widgetList = [] } = store.leftModule;

        return (
            <div className={style.widgetList}>
                {_.map(widgetList, (item: Entire, key) => {
                    return (
                        <TextWidget
                            widget={item}
                            key={item.id}
                            addPropsToCenterForm={this.addPropsToCenterForm}
                            store={store}
                        />
                    );
                })}
            </div>
        );
    }
}
