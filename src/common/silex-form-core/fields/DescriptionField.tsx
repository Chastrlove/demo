import * as React from "react";
import { IDescriptionFieldProps } from "../types";

const DescriptionField: React.SFC<IDescriptionFieldProps> = (props) => {
    const { id, description } = props;
    if (!description) {
        // See #312: Ensure compatibility with old versions of React.
        return <div />;
    }
    if (typeof description === "string") {
        return (
            <p id={id} className="field-description">
                {description}
            </p>
        );
    } else {
        return (
            <div id={id} className="field-description">
                {description}
            </div>
        );
    }
};

export default DescriptionField;
