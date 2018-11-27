import {action, observable} from "mobx";

export default class TemplatesStore {

    @observable
    public templates = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    @action
    public setTemplates = (templates = []) => this.templates = templates;

    @observable
    public data = [];
    @action
    public setData = (data = []) => this.data = data;

    constructor() {
        this.loadData().then(this.setData)
    }

    public loadData = () => {
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
    }
}