import * as React from "react";

import { getUiOptions, getWidget, optionsList } from "../../../silex-shared/src/utils";
import { IBooleanFieldProps } from "../types";

const BooleanField: React.SFC<IBooleanFieldProps> = (props) => {
  const {
    schema,
    name,
    uiSchema,
    idSchema,
    formData,
    registry,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    rawErrors,
  } = props;
  const { title } = schema;
  const { widgets, formContext } = registry;
  const { widget = "checkbox", placeholder, ...options } = getUiOptions(uiSchema);
  const Widget = getWidget(schema, widget, widgets);
  const enumOptions = optionsList(
    {
      enum: [true, false],
    },
    {
      ui$enums: [
        {
          name: "yes",
        },
        {
          name: "no",
        },
      ],
    },
  );

  return (
    <Widget
      options={{ ...options, enumOptions }}
      schema={schema}
      id={idSchema && idSchema.$id}
      onChange={onChange}
      label={title === undefined ? name : title}
      value={formData}
      required={required}
      disabled={disabled}
      readonly={readonly}
      registry={registry}
      formContext={formContext}
      autofocus={autofocus}
      rawErrors={rawErrors}
      placeholder={placeholder}
    />
  );
};

BooleanField.defaultProps = {
  autofocus: false,
  disabled: false,
  readonly: false,
  uiSchema: {},
};

export default BooleanField;
