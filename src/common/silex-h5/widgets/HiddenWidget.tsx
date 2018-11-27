/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: HiddenWidget.tsx
 */

import * as React from "react";

export default class HiddenWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <>
        <input
          type="hidden"
          id={this.props.id}
          value={typeof this.props.value === "undefined" ? "" : this.props.value}
        />
      </>
    );
  }
}
