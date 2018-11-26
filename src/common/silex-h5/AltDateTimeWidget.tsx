/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: AltDateTimeWidget.tsx
 */

import * as React from "react";

import DateTimeWidget from "./DateTimeWidget";

export default class AltDateTimeWidget extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DateTimeWidget {...this.props} />;
  }
}
