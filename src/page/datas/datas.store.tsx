import {action, observable} from "mobx";

export default class DatasStore {
    @observable
    public name = '';

    @action
    public setName = (name = '') => this.name = name;
}