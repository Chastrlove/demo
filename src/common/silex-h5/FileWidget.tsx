/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: FileWidget.tsx
 */

import * as React from "react";

import { ImagePicker, WhiteSpace } from "antd-mobile";

export default class FileWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  _onChange = (files) => {
    this.setState({
      files,
    });

    const fileData = this.props.multiple ? files.map((v) => v.url) : files.map((v) => v.url)[0];
    this.props.onChange(fileData);
  };

  public render() {
    const { value, multiple } = this.props;

    const selectable = value && (value.length > 4 || (!multiple && value.length > 0));
    return (
      <>
        <ImagePicker
          files={this.state.files}
          onChange={this._onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={!selectable}
          multiple={false}
        />
        <WhiteSpace size={"lg"} />
      </>
    );
  }
}
