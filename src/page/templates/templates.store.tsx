import {action, observable} from "mobx";

export default class TemplatesStore {
    @observable
    public name = '';

    @action
    public setName = (name = '') => this.name = name;
}