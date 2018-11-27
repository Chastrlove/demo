import {action, observable} from "mobx";
import {WidgetApi} from "silex-editor/editor/api/api";

export default class EditorStore {
    @observable
    public name = '';

    @action
    public setName = (name = '') => this.name = name;

    public static widgetApi = new WidgetApi({
        basePath: 'http://localhost:3000/api/v1'
    });

    public addWidget = (data) => {
        console.log(data);
        // return EditorStore.widgetApi.addWidget(data);
    };

    public loadWidgets = () =>{
        return EditorStore.widgetApi.getWidgets();
    }
}