import { Subscription } from "../types";

export default class Subscriptions<StateType> {
    private subscriptions: Array<Subscription<StateType>> = [];

    public getSubscriptions = () => this.subscriptions;

    public subscribe = (subscription: Subscription<StateType>) => {
        this.subscriptions = [...this.subscriptions, subscription];
    };

    public unsubscribe = (subscription: Subscription<StateType>) => {
        this.subscriptions = this.subscriptions.filter((subscriber) => subscriber !== subscription);
    };
}
