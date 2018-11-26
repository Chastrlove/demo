import * as React from "react";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface URLWidgetProps extends BaseInputProps {
    value?: string;
}

class URLWidget extends React.Component<URLWidgetProps, any> {
    public render() {
        return <BaseInput {...this.props} type="url" />;
    }
}

export const MyURLWidget = (props: URLWidgetProps) => {
    return <URLWidget {...props} />;
};
