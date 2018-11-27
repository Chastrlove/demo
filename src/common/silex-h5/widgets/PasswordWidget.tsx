/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: PasswordWidget.tsx
 */

import * as React from "react";

import BaseInput from "./BaseInput";

export default class PasswordWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <BaseInput type="password" {...this.props} />;
  }
}
