import {action, computed, observable} from "mobx";
import appStore from '../../app.store';
import {TemplateApi, DataApi} from "api";

export default class TemplatesStore {

    public static templateApi = new TemplateApi({
        basePath: 'http://localhost:3000/api/v1'
    });

    public static dataApi = new DataApi({
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

    @observable
    public showForm = false;
    @action
    public setShowForm = (showForm = !this.showForm) => this.showForm = showForm;

    @observable
    public currentData = {};
    @action
    public setCurrentData = (currentData = {}) => this.currentData = currentData;

    @computed
    public get title() {
        return appStore.currentTemplate.uiSchema ? appStore.currentTemplate.uiSchema.ui$title : ''
    }

    public loadData = (currentTemplates) => {
        return TemplatesStore.dataApi.getDatasByQuery({
            id: currentTemplates.id
        });
    };

    public loadTemplates = () => {
        return TemplatesStore.templateApi.getTemplates();
    }
}