import { observable, action } from "mobx";
import { Store } from "./Store";
import { Entire } from "../api/api";
import widgetListData from "./data";

export class LeftModuleStore {
    public store: Store;

    public constructor(store: Store) {
        this.store = store;
    }

    public dragEventFlag = true;

    public setDragEventFlag = (dragEventFlag = !this.dragEventFlag) => {
        this.dragEventFlag = dragEventFlag;
    };

    @observable
    public widgetList: Entire[] = widgetListData;

    @action
    public setWidgetList = (widgetList) => {
        this.widgetList = widgetList;
    };
}
