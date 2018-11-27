/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: AltDateWidget.tsx
 */

import * as React from "react";

import DateWidget from "./DateWidget";

export default class AltDateWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DateWidget {...this.props} />;
  }
}
