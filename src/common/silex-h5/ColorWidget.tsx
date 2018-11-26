/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: ColorWidget.tsx
 */

import * as React from "react";

import BaseInput from "./BaseInput";

export default class ColorWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { disabled, readonly } = this.props;

    return <BaseInput type="color" {...this.props} disabled={disabled || readonly} />;
  }
}
