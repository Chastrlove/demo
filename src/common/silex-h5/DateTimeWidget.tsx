/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: DateTimeWidget.tsx
 */

import * as React from "react";

import * as dayjs from "dayjs";

import { List, DatePicker, WhiteSpace } from "antd-mobile";

export default class DateWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public _onChange = (date) => {
    this.props.onChange(dayjs(date).format("YYYY-MM-DD hh:mm"));
  };
  public render() {
    const { label, value, disabled, readonly } = this.props;
    const datetime = dayjs(value).toDate();

    return (
      <>
        <DatePicker
          mode={"datetime"}
          value={datetime}
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
