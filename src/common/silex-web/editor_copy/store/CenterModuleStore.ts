import { action, observable } from "mobx";
import { Store } from "./Store";

export class CenterModuleStore {
    public store: Store;

    public constructor(store) {
        this.store = store;
    }

    @observable
    public currentClickPath = "";

    @action
    public setCurrentClickPath = (currentClickPath) => {
        this.currentClickPath = currentClickPath;
    };
}
