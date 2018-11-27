import * as _ from "lodash";
import { ICoreMetaSchema, IUISchemaObject } from "silex-shared/types";
import { IProperty } from "./utils";

export interface IUserOptions {
    columnShower: string[];
}

export interface IState {
    properties: _.LoDashExplicitWrapper<_.Dictionary<IProperty>>;
    schema: ICoreMetaSchema;
    uiSchema: IUISchemaObject<any>;
    data: any[];
    search: "search" | "unSearch";
}
