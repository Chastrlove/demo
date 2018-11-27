import {action, observable} from "mobx";
import appStore from '../../app.store';
import {TemplateApi} from "api";

export default class TemplatesStore {

    public static templateApi = new TemplateApi({
        basePath: 'http://localhost:3000/api/v1'
    });

    @observable
    public templates = [];
    @action
    public setTemplates = (templates = []) => this.templates = templates;

    @observable
    public data = [];
    @action
    public setData = (data = []) => this.data = data;

    @observable
    public currentTemplateKeys = [];
    @action
    public setCurrentTemplateKeys = (currentTemplateKeys = []) => this.currentTemplateKeys = currentTemplateKeys;

    @action
    public changeCurrentTemplateKeys = ({item, key, keyPath = ''}) => {
        this.setCurrentTemplateKeys([key]);
        appStore.setCurrentTemplate(item);
    }

    public loadData = (currentTemplates) => {
        console.log(currentTemplates);
        const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
        return Promise.resolve(data);
    };

    public loadTemplates = () => {
        return TemplatesStore.templateApi.getTemplates();
    }
}