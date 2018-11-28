import * as _ from "lodash";
import {ICoreMetaSchema, IUISchema} from "silex-shared/types";
import {IProperty} from "./utils";
import {TableProps} from "antd/es/table";

export interface IUserOptions {
    columnShower: string[];
}

export interface IInitialState {
    schema: ICoreMetaSchema;
    uiSchema: IUISchema & { [key: string]: IUISchema };
    data?: any[];
    search?: "search" | "unSearch";
}

export interface ISchemaTableProps<T extends IInitialState> {
    actions?: JSX.Element;
    initialState: T;
    getTableProps?: (...argument) => TableProps<any>;
    dataLoader: (...argument) => any
}

export interface IState {
    properties: _.LoDashExplicitWrapper<_.Dictionary<IProperty>>;
    schema: ICoreMetaSchema;
    uiSchema: IUISchema & { [key: string]: IUISchema };
    data: any[];
    search: "search" | "unSearch";
}
