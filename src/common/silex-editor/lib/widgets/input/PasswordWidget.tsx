import * as React from "react";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface PasswordWidgetProps extends BaseInputProps {
    value?: string;
}

class PasswordWidget extends React.Component<PasswordWidgetProps, any> {
    public render() {
        return <BaseInput {...this.props} type="password" />;
    }
}

export const MyPasswordWidget = (props: PasswordWidgetProps) => {
    return <PasswordWidget {...props} />;
};
