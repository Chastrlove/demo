import * as React from "react";
import { IUnsupportedFieldProps } from "../types";

const UnsupportedField: React.SFC<IUnsupportedFieldProps> = ({ schema, idSchema, reason }) => {
    return (
        <div className="unsupported-field">
            <p>
                Unsupported field schema
                {idSchema &&
                    idSchema.$id && (
                        <span>
                            {" for"} field <code>{idSchema.$id}</code>
                        </span>
                    )}
                {reason && <em>: {reason}</em>}.
            </p>
            {schema && <pre>{JSON.stringify(schema, null, 2)}</pre>}
        </div>
    );
};

export default UnsupportedField;
