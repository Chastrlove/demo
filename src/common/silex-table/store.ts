import * as _ from "lodash";
import createStore from "../../silex-shared/src/react-waterfall";
import { IConfig } from "../../silex-shared/src/react-waterfall/types";
import { IState } from "./types";

const config: IConfig<
    IState,
    {
        onChecked: (options: { checked; dataIndex; ui$order }) => any | void;
        addProperties: (...argument: any) => any | void;
        changeSearch: (...argument: any) => any | void;
        changeAll: (...argument: any) => any | void;
    }
> = {
    initialState: (() => {
        const state = {
            properties: _.chain({}),
            schema: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        title: "Name",
                    },
                    age: {
                        type: "number",
                        title: "Age",
                    },
                    address: {
                        type: "string",
                        title: "Address",
                    },
                    AA: {
                        type: "string",
                        title: "AA",
                    },
                },
            },
            uiSchema: {
                ui$order: ["age", "name", "address"],
            },
            data: [
                {
                    key: "1",
                    name: "John Brown",
                    age: 32,
                    address: "New York No. 1 Lake Park",
                },
                {
                    key: "2",
                    name: "Jim Green",
                    age: 42,
                    address: "London No. 1 Lake Park",
                },
                {
                    key: "3",
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park",
                },
            ],
            search: "search",
        };
        state.properties = _.chain(state.schema.properties).mapValues((property, key) => {
            return { ...{ dataIndex: key }, ...property };
        });
        return state;
    })(),
    actionsCreators: {
        addProperties: (state, a) => {
            console.log(state, a);
        },
        onChecked: (state, ac, { checked, dataIndex, ui$order }) => {
            const { uiSchema } = state;
            return {
                ...state,
                ...{
                    uiSchema: {
                        ...uiSchema,
                        ...{
                            ui$order: checked
                                ? ui$order
                                      .concat([dataIndex])
                                      .uniq()
                                      .value()
                                : ui$order.without(dataIndex).value(),
                        },
                    },
                },
            };
        },
        changeSearch: (state: IState, ac, search) => {
            state.search = search;
            return state;
        },
        changeAll: (state: IState, ac, newState) => {
            return newState;
        },
    },
};

export const { Provider, connect, actions } = createStore(config);
