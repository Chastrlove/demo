import * as React from "react";
import { PurpleCoreSchemaMetaSchema } from "../types";

export interface UnsupportedFieldProps {
    schema: PurpleCoreSchemaMetaSchema;
    idSchema?: PurpleCoreSchemaMetaSchema;
    reason?: string;
}

const UnsupportedField: React.SFC<UnsupportedFieldProps> = ({ schema, idSchema, reason }) => {
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
