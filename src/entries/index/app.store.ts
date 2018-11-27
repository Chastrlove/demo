import {action, observable} from "mobx";
import {routes} from "./route";
import {IItem} from "../../component/headerMenu/HeaderMenu";
import {Template} from "api";

export class AppStore {

    public routes = routes;

    public masterMenuData: IItem[] = [
        // {
        //     id: "editor",
        //     name: "编辑器",
        //     icon: "sss",
        //     path: "/editor",
        // },
        // {
        //     id: "h5",
        //     name: "h5",
        //     icon: "sss",
        //     path: "/h5",
        // },
        {
            id: "templates",
            name: "表单模板",
            icon: "sss",
            path: "/templates",
        },
        // {
        //     id: "web",
        //     name: "提交表单",
        //     icon: "sss",
        //     path: "/web",
        // },
    ];

    @observable
    public selectedKeys = [window.location.hash.replace("#/", "")];

    @action
    public changeMenu = (path: string[]) => this.selectedKeys = path;

    @observable
    public currentTemplate: Partial<Template> = {};

    @action
    public setCurrentTemplate = (currentTemplate: Partial<Template> = {}) => this.currentTemplate = currentTemplate;
}

export default new AppStore();
