/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: TextareaWidget.tsx
 */

import * as React from "react";

import { TextareaItem, WhiteSpace } from "antd-mobile";

export default class TextareaWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  private _onChange = (val) => {
    this.props.onChange(val);
  };

  private _onBlur = (val) => {
    this.props.onBlur(this.props.id, val);
  };

  private _onFocus = (val) => {
    this.props.onFocus(this.props.id, val);
  };

  public render() {
    const { id, label, clear, placeholder, value, count, disabled, readonly } = this.props;

    return (
      <>
        <TextareaItem
          key={id}
          defaultValue={value}
          editable={!readonly}
          disabled={disabled}
          placeholder={placeholder || `输入框`}
          title={label}
          clear={clear}
          count={count}
          onChange={this._onChange}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          autoHeight
        />
        <WhiteSpace size="lg" />
      </>
    );
  }
}
