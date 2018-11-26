import React, { Component } from "react";

import { CreateProvider, State } from "../types";

interface IProps {
    children: React.ReactNode;
    initialState: {};
}

const EnhancedProvider: CreateProvider = <T, P = any>(setProvider, Provider, initialState) =>
    class EnhancedProviderInSide extends Component<IProps, State<T>> {
        constructor(props) {
            super(props);
            this.state = props.initialState || initialState;
            setProvider(this);
        }

        public render() {
            return <Provider value={this.state}>{this.props.children}</Provider>;
        }
    };

export default EnhancedProvider;
