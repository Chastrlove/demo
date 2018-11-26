/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: EmailWidget.tsx
 */

import * as React from "react";

import BaseInput from "./BaseInput";

export default class EmailWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <BaseInput type="email" {...this.props} />;
  }
}
