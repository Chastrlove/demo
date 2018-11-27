/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: RadioWidget.tsx
 */

import * as React from "react";

import { List, Radio, WhiteSpace } from "antd-mobile";

const RadioItem = Radio.RadioItem;

export default class RadioWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { options, value, required, disabled, readonly, onChange } = this.props;

    // Generating a unique field name to identify this set of radio buttons
    const name = Math.random().toString();
    const { enumOptions, enumDisabled } = options;
    // checked={checked} has been moved above name={name}, As mentioned in #349;
    // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.

    return (
      <>
        <List>
          {enumOptions.map((option, i) => {
            const checked = option.value === value;
            const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;

            return (
              <RadioItem
                key={i}
                name={name}
                required={required}
                value={option.value}
                disabled={disabled || itemDisabled || readonly}
                checked={checked}
                onChange={() => onChange(option.value)}
              >
                {option.label}
              </RadioItem>
            );
          })}
        </List>
        <WhiteSpace size="lg" />
      </>
    );
  }
}
