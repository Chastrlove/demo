/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: DateWidget.tsx
 */

import * as React from "react";

import * as dayjs from "dayjs";

import { List, DatePicker, WhiteSpace } from "antd-mobile";

export default class DateWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public _onChange = (date) => {
    this.props.onChange(dayjs(date).format("YYYY-MM-DD"));
  };
  public render() {
    const { label, value, disabled, readonly } = this.props;
    const date = dayjs(value).toDate();
    return (
      <>
        <DatePicker
          mode={"date"}
          value={date}
          disabled={disabled || readonly}
          onChange={this._onChange}
        >
          <List.Item arrow="horizontal">{label}</List.Item>
        </DatePicker>
        <WhiteSpace size="lg" />
      </>
    );
  }
}
