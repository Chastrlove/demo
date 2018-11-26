import * as React from "react";

export type State<StateType> = StateType | { [key: string]: any };

type SetState<StateType> = (state: State<StateType>, callback: () => void) => void;

export type CustomSetState<StateType> = (
    action: string,
    state: State<StateType>,
    ...args
) => Promise<void>;

export interface ISelf<StateType> {
    state: State<StateType>;
    setState: SetState<StateType>;
}

export type Functional<T extends object> = { [p in keyof T]: (...argument) => any };

export type FunctionObject = Functional<{
    [key: string]: any;
}>;

export type Action<StateType, ActionsCreatorstype> = (
    // State: State<StateType>,
    // actions: Actions<StateType, ActionsCreatorstype>,
    ...argument
) => any | void;

export type Actions<StateType, ActionsCreatorstype> = {
    [P in keyof ActionsCreatorstype]: Action<StateType, ActionsCreatorstype>
};

export interface IConfig<StateType, ActionsCreatorstype extends FunctionObject> {
    initialState: State<StateType>;
    actionsCreators: ActionsCreatorstype;
}

type Middleware<StateType, ActionsCreatorstype> = (
    { initialState: State, actionsCreators: Actions },
    self: ISelf<StateType>,
    actions: Actions<StateType, ActionsCreatorstype>,
) => (action: string, arg: string) => void;

type InitializedMiddlewares = (action: string, ...args) => void;

export interface IProviderType<StateType> {
    setState: SetState<StateType>;
    initializedMiddlewares: InitializedMiddlewares[];
}

type MapStateToProps<StateType> = (state: State<StateType>) => State<StateType>;

type Connect<StateType> = <T = any>(
    mapStateToProps: MapStateToProps<StateType>,
) => (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>;

export type CreateConnect = <T>(Consumer) => Connect<T>;

export type SetProvider = (...argument) => any;

type Provider = React.ComponentType<any>;

export type CreateProvider = <StateType>(
    setProvider: SetProvider,
    Provider: Provider,
    initialState: State<StateType>,
) => React.ComponentType<any>;

export type Subscription<StateType> = (action: string, state: State<StateType>, args?: {}) => void;

export interface IStore<StateType, ActionsCreatorstype> {
    Provider: Provider;
    connect: Connect<StateType>;
    actions: Actions<StateType, ActionsCreatorstype>;
    subscribe: (subscription: Subscription<StateType>) => void;
    unsubscribe: (subscription: Subscription<StateType>) => void;
}

export type CreateStore = <StateType, ActionsCreatorstype extends FunctionObject>(
    config: IConfig<StateType, ActionsCreatorstype>,
    middlewares?: Array<Middleware<StateType, ActionsCreatorstype>>,
) => IStore<StateType, ActionsCreatorstype>;
