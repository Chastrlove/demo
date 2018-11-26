import {action, observable} from "mobx";

export default class WebStore {
    @observable
    public name = '';

    @action
    public setName = (name = '') => this.name = name;
}