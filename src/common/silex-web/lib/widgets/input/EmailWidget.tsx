import * as React from "react";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface EmailWidgetProps extends BaseInputProps {
    value?: string;
}

class EmailWidget extends React.Component<EmailWidgetProps, any> {
    public render() {
        return <BaseInput {...this.props} type="email" />;
    }
}

export const MyEmailWidget = (props: EmailWidgetProps) => {
    return <EmailWidget {...props} />;
};
