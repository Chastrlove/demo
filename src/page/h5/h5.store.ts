import {TemplateApi} from "api";
import { action } from 'mobx';

import samples from "../../samples/index";

export class H5Store {
  private templateApi = new TemplateApi({
    basePath: 'http://localhost:3000/api/v1'
  });

  public samples = samples.Widgets;

  constructor() {
    this.getTemplate().then((data: any) => {
      if(data.succuss) {
        this.samples = data.result;
      }
    });
  }

  @action
  public getTemplate = () => {
    return this.templateApi.getTemplateId('123');
  };
}
