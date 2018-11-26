/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: SelectWidget.tsx
 */

import * as React from "react";

import { List, Picker, WhiteSpace } from "antd-mobile";

export default class SelectWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public _onChange = (val) => {
    this.props.onChange(val && val[0]);
  };

  public render() {
    const { id, label, options, value, disabled, readonly } = this.props;
    const { enumOptions } = options;

    // console.log("SelectWidget", this.props);
    return (
      <>
        <Picker
          key={id}
          data={enumOptions}
          cols={1}
          value={[value]}
          disabled={disabled || readonly}
          onChange={this._onChange}
        >
          <List.Item arrow="horizontal">{label}</List.Item>
        </Picker>
        <WhiteSpace size="lg" />
      </>
    );
  }
}
