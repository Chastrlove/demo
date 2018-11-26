import * as React from "react";
import Prevent from "../components/Prevent";

import { CreateConnect } from "../types";

const connect: CreateConnect = (Consumer) => (mapStateToProps) => (WrappedComponent) => {
    const renderComponent = (props) => <WrappedComponent {...props} />;
    const ConnectedComponent = (props) => (
        <Consumer>
            {(state) => {
                const filteredState = mapStateToProps(state || {});
                return <Prevent renderComponent={renderComponent} {...props} {...filteredState} />;
            }}
        </Consumer>
    );

    (ConnectedComponent as any).displayName = `Connect(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Unknown"})`;

    return ConnectedComponent;
};

export default connect;
