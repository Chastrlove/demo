import * as React from "react";
import { ITitleFieldProps } from "../types";

const REQUIRED_FIELD_SYMBOL = "*";

const TitleField: React.SFC<ITitleFieldProps> = (props) => {
  const { id, title, required } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return (
    <label
      id={id}
      style={{
        marginBottom: "10px",
        display: "block",
      }}
    >
      {legend}:
    </label>
  );
};

export default TitleField;
