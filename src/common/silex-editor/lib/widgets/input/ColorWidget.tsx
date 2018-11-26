import * as React from "react";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface ColorWidgetProps extends BaseInputProps {
    value?: string;
}

class ColorWidget extends React.Component<ColorWidgetProps, any> {
    public render() {
        return <BaseInput {...this.props} type="color" />;
    }
}

export const MyColorWidget = (props: ColorWidgetProps) => {
    return <ColorWidget {...props} />;
};
