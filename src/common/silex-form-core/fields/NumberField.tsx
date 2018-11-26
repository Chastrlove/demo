import * as React from "react";
import { asNumber } from "../../../silex-shared/src/utils";
import { INumberFieldProps } from "../types";

const NumberField: React.SFC<INumberFieldProps> = (props) => {
    const { StringField } = props.registry.fields;
    const change = (value) => props.onChange(asNumber(value));
    return <StringField {...props} onChange={change} />;
};

NumberField.defaultProps = {
    uiSchema: {},
};

export default NumberField;
