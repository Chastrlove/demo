import {action, observable} from "mobx";
import {routes} from "./route";
import {IItem} from "./component/headerMenu/HeaderMenu";

export class AppStore {

    public routes = routes;

    public masterMenuData: IItem[] = [
        {
            id: "editor",
            name: "editor",
            icon: "sss",
            path: "/editor",
        },
        {
            id: "h5",
            name: "h5",
            icon: "sss",
            path: "/h5",
        },
        {
            id: "templates",
            name: "templates",
            icon: "sss",
            path: "/templates",
        },
        {
            id: "web",
            name: "web",
            icon: "sss",
            path: "/web",
        },
    ];

    @observable
    public selectedKeys = [window.location.hash.replace("#/", "")];

    @action
    public changeMenu = (path: string[]) => {
        this.selectedKeys = path;
    }
}

export default new AppStore();