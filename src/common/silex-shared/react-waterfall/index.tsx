import * as _ from "lodash";
import { createContext } from "react";

import createProvider from "./components/Provider";
import createConnect from "./helpers/connect";
import devtools from "./helpers/devtools";
import Subscriptions from "./helpers/subscriptions";

import {
    Action,
    Actions,
    CreateStore,
    CustomSetState,
    IProviderType,
    IStore,
    SetProvider,
    State,
} from "./types";

const defaultMiddlewares =
    process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    (window as any).devToolsExtension
        ? [devtools]
        : [];

const createStore: CreateStore = <T, P extends Actions<T, P>>(
    { initialState, actionsCreators },
    middlewares?,
): IStore<T, P> => {
    let provider: IProviderType<T>;
    const context = createContext(initialState);

    const { getSubscriptions, subscribe, unsubscribe } = new Subscriptions();

    const setProvider: SetProvider = (self) => {
        const initializedMiddlewares = [...(middlewares || []), ...defaultMiddlewares].map(
            (middleware) => middleware({ initialState, actionsCreators }, self, actions),
        );

        provider = {
            initializedMiddlewares,
            setState: (stateIndex, callback) => self.setState(stateIndex, callback),
        };
    };

    let state: State<T> = initialState;

    const setState: CustomSetState<T> = (action, result, ...args) => {
        state = { ...(state as object), ...(result as object) };
        return new Promise(function doSubscript(resolve) {
            const subscriptions = getSubscriptions();
            subscriptions.forEach(function doSubscriptions(fn) {
                return fn(action, result, ...args);
            });
            provider.setState(state, () => {
                provider.initializedMiddlewares.forEach(function addMiddlewares(m) {
                    m(action, ...args);
                });
                resolve();
            });
        });
    };

    const actions: Actions<T, P> = _.mapValues<P, Action<T, P>>(
        actionsCreators,
        function createAction(value: Action<T, P>, key: string) {
            return function doAction(...args) {
                if (!provider) {
                    console.error("<Provider /> is not initialized yet");
                    return;
                }
                const result = value(state, actions, ...args);
                return result.then
                    ? result.then((res) => setState(key, res, ...args))
                    : setState(key, result, args);
            };
        },
    );

    const Provider = createProvider(setProvider, context.Provider, initialState);
    const connect = createConnect(context.Consumer);

    return {
        Provider,
        actions,
        connect,
        subscribe,
        unsubscribe,
    };
};

export default createStore;
