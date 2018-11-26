import * as React from "react";

interface IProps {
    renderComponent: ({}) => React.ReactNode;
}

export default class Prevent extends React.PureComponent<IProps> {
    public render() {
        const { renderComponent, ...rest } = this.props;
        return renderComponent(rest);
    }
}
