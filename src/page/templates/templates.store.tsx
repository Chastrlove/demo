import {action, computed, observable, toJS} from "mobx";
import appStore from 'entries/index/app.store';
import {TemplateApi, DataApi} from "api";
import * as _ from 'lodash';

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
    public datas = [];
    @action
    public setDatas = (datas = []) => this.datas = datas;

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
    public showH5Form = false;
    @action
    public setShowH5Form = (showH5Form = !this.showH5Form) => this.showH5Form = showH5Form;

    @observable
    public currentData: any = {
        data: undefined,
        schema: undefined,
        uiSchema: undefined
    };
    @action
    public setCurrentData = (data = {}) => this.currentData = data;
    @action
    public setCurrentDataAndShow = (currentData = {}, type = 'setShowForm') => {
        this.setCurrentData(currentData);
        this[type]();
    }
    @action
    public setData = (data = {}) => this.currentData.data = data;

    @computed
    public get title() {
        return appStore.currentTemplate.uiSchema ? appStore.currentTemplate.uiSchema.ui$title : ''
    }

    public loadData = (currentTemplate) => {
        return TemplatesStore.dataApi.getDatasByQuery({
            templateId: currentTemplate.id
        });
    };

    public loadTemplates = () => {
        return TemplatesStore.templateApi.getTemplates();
    }

    public submit = () => {
        const currentId = this.currentData.id;
        if(currentId){
           return this.editForm()
        } else {
            return this.addForm();
        }
    }

    public addForm = () => {
        const currentData = toJS(this.currentData);
        const currentTemplate = toJS(appStore.currentTemplate);
        const templateId = currentTemplate.id;
        console.log(currentData, currentTemplate);
        // return Promise.reject({
        //     msg: '新增失败'
        // })
        if (_.isEmpty(currentData) || _.isEmpty(currentTemplate)) {
            return Promise.reject({
                msg: '新增失败'
            })
        }

        const now = Date.now();
        return TemplatesStore.dataApi.addData({
            "id": now.toString(),
            "active": true,
            "canUpdate": false,
            _delete: false,
            "createBy": '222',
            "createTime": now,
            "last": true,
            "release": "1.0",
            "schemaUpdate": true,
            "system": false,
            "updateBy": "zz",
            "updateTime": now,
            templateId: templateId,
            data: currentData.data,
            schema: currentData.schema || currentTemplate.schema,
            uiSchema: currentData.uiSchema || currentTemplate.uiSchema
        })
    }

    public editForm = () => {
        const currentData = toJS(this.currentData);
        if (_.isEmpty(currentData)) {
            return Promise.reject({
                msg: '新增失败'
            })
        }

        const now = Date.now();
        return TemplatesStore.dataApi.updateData(currentData, {
            "updateTime": now,
        })
    }
}
