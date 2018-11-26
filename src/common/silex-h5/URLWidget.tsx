/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: URLWidget.tsx
 */

import * as React from "react";

import BaseInput from "./BaseInput";

export default class URLWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <BaseInput type="url" {...this.props} />;
  }
}
