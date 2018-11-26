import {action, observable} from "mobx";

export default class EditorStore {
    @observable
    public name = '';

    @action
    public setName = (name = '') => this.name = name;
}