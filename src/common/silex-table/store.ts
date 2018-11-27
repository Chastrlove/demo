import * as _ from "lodash";
import createState from "react-copy-write";

const { Provider, Consumer, mutate } = createState({
    properties: _.chain({}),
    schema: {
        type: "object",
        properties: {},
    },
    uiSchema: {
        ui$order: [],
    },
    data: [],
    search: "search",
});

export const actions = {
    addProperties: (state, a) => {
        console.log(state, a);
    },
    onChecked: ({ checked, dataIndex, ui$order }) => {
        mutate((state) => {
            state.uiSchema.ui$order = checked
                ? ui$order
                      .concat([dataIndex])
                      .uniq()
                      .value()
                : ui$order.without(dataIndex).value();
        });
    },
    changeSearch: (search: "search" | "unSearch") => {
        mutate((state) => {
            state.search = search;
        });
    },
    changeAll: (newState) => {
        mutate((state) => {
            for (const key in newState) {
                if (newState.hasOwnProperty(key) && (state as object).hasOwnProperty(key)) {
                    state[key] = newState[key];
                }
            }
        });
    },
};

export { Provider, Consumer };
