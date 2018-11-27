/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: BaseInput.tsx
 */

import * as React from "react";

import { InputItem, WhiteSpace } from "antd-mobile";

export default class BaseInput extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  private _onChange = (val) => {
    this.props.onChange(val);
    console.log("onChange", val);
  };

  private _onBlur = (val) => {
    this.props.onBlur(this.props.id, val);
    console.log("onBlur", val);
  };

  private _onFocus = (val) => {
    this.props.onFocus(this.props.id, val);
    console.log("onFocus", val);
  };

  public render() {
    // Note: since React 15.2.0 we can't forward unknown element attributes, so we
    // exclude the "options" and "schema" ones here.
    if (!this.props.id) {
      console.log("No id for", this.props);
      throw new Error(`no id for props ${JSON.stringify(this.props)}`);
    }

    const {
      id,
      type,
      label,
      value,
      readonly,
      disabled,
      clear,
      autofocus,
      placeholder,
    } = this.props;

    // console.log(`BaseInput ${label || value}`, this.props);

    return (
      <>
        <InputItem
          key={id}
          type={type || "text"}
          defaultValue={value}
          editable={!readonly}
          disabled={disabled}
          autoFocus={autofocus}
          placeholder={placeholder || `输入框`}
          updatePlaceholder={true}
          clear={clear || true}
          onChange={this._onChange}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
        >
          {label}
        </InputItem>
        <WhiteSpace size="lg" />
      </>
    );
  }
}
