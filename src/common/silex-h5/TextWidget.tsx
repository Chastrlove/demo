/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: TextWidget.tsx
 */

import * as React from "react";

import BaseInput from "./BaseInput";

export default class TextWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <BaseInput {...this.props} />;
  }
}
