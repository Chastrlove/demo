import * as React from "react";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface HiddenWidgetProps extends BaseInputProps {
    value?: string;
}

class HiddenWidget extends React.Component<HiddenWidgetProps, any> {
    public render() {
        return <BaseInput {...this.props} type="hidden" />;
    }
}

export const MyHiddenWidget = (props: HiddenWidgetProps) => {
    return <HiddenWidget {...props} />;
};
