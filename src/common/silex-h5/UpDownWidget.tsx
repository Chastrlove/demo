/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: UpDownWidget.tsx
 */

import * as React from "react";

import BaseInput from "./BaseInput";

import { rangeSpec } from "./utils";

export default class UpDownWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return <BaseInput type="number" {...this.props} {...rangeSpec(this.props.schema)} />;
  }
}
