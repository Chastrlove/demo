import {action, observable} from "mobx";

export default class H5Store {
    @observable
    public name = '';

    @action
    public setName = (name = '') => this.name = name;
}