import {TemplateApi, DataApi} from "api";
import { action, observable } from 'mobx';

import samples from "../../samples/index";

export class H5Store {
  private templateApi = new TemplateApi({
    basePath: 'http://localhost:3000/api/v1'
  });

  private dataApi = new DataApi({
    basePath: 'http://localhost:3000/api/v1'
  });

  @observable
  public samples = samples.Widgets;

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);

    this.getTemplate(urlParams.get('id')).then((data: any) => {
      if(data && data.schema && data.uiSchema) {
        this.samples = data;
      }
    });
  }

  @action
  public getTemplate = (id) => {
    return this.templateApi.getTemplateId(id);
  };

  @action
  public addData = (data) => {
    return this.dataApi.addData(data);
  };
}
