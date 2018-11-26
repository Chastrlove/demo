import * as React from "react";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface TextWidgetProps extends BaseInputProps {
    value?: string;
}

class TextWidget extends React.Component<TextWidgetProps, any> {
    public render() {
        return <BaseInput {...this.props} type="text" />;
    }
}

export const MyTextWidget = (props: TextWidgetProps) => {
    return <TextWidget {...props} />;
};
