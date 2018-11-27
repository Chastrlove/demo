/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: RangeWidget.tsx
 */

import * as React from "react";

import { Slider, WhiteSpace } from "antd-mobile";

export default class RangeWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    };
  }

  public _onChange = (val) => {
    this.props.onChange(val);
  };

  public render() {
    const { schema, value, disabled, readonly } = this.props;
    const { minimum, maximum, multipleOf } = schema;

    return (
      <>
        <Slider
          defaultValue={this.state.value}
          min={minimum}
          max={maximum}
          step={multipleOf}
          disabled={disabled || readonly}
          onChange={this._onChange}
        />
        <WhiteSpace size="lg" />
        <span>{value}</span>
        <WhiteSpace size="lg" />
      </>
    );
  }
}
