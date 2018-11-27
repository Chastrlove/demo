import {action, observable} from "mobx";
import {WidgetApi} from "silex-editor/editor/api/api";

export default class EditorStore {

    public static widgetApi = new WidgetApi({
        basePath: 'http://localhost:3000/api/v1'
    });

    @observable
    public title = '';

    @action
    public setTitle = (title = '') => this.title = title;

    public addWidget = (data) => {
        return EditorStore.widgetApi.addWidget(data);
    };

    public loadWidgets = () => {
        return EditorStore.widgetApi.getWidgets();
    }

    public formData = {
        schema: {type: "object", properties: {}},
        uiSchema: {},
        formData: {},
        uiDefinitions: {},
    };

    public setFormData = (formData = {
        schema: {type: "object", properties: {}},
        uiSchema: {},
        formData: {},
        uiDefinitions: {},
    }) => this.formData = formData;
}