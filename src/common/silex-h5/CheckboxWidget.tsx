/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: CheckboxWidget.tsx
 */

import * as React from "react";

import { Checkbox, WhiteSpace } from "antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;

export default class CheckboxWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public _onChange = (e) => {
    this.props.onChange(e.target.checked);
  };

  public render() {
    const { id, value, disabled, readonly, label } = this.props;

    console.log(`CheckboxWidget ${label || value}`, this.props);

    return (
      <>
        <CheckboxItem
          key={id}
          defaultChecked={value}
          disabled={disabled || readonly}
          onChange={this._onChange}
        >
          {label}
        </CheckboxItem>
        <WhiteSpace size="lg" />
      </>
    );
  }
}
