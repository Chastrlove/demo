/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: CheckboxesWidget.tsx
 */

import * as React from "react";

import { Checkbox, WhiteSpace } from "antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;

export default class CheckboxesWidget extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public selectValue = (value, selected, all) => {
    const at = all.indexOf(value);
    const updated = selected.slice(0, at).concat(value, selected.slice(at));
    // As inserting values at predefined index positions doesn't work with empty
    // arrays, we need to reorder the updated selection to match the initial order
    return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
  };

  public deselectValue = (value, selected) => {
    return selected.filter((v) => v !== value);
  };

  public _onChange = (value, e) => {
    const { value: values, onChange } = this.props;
    const all = this.props.options.enumOptions.map(({ value }) => value);
    if (e.target.checked) {
      onChange(this.selectValue(value, values, all));
    } else {
      onChange(this.deselectValue(value, values));
    }
  };

  public render() {
    const { disabled, options, value } = this.props;
    const { enumOptions } = options;

    // console.log(`CheckboxesWidget ${value}`, this.props);

    return (
      <>
        {enumOptions.map((v) => (
          <CheckboxItem
            key={v.value}
            defaultChecked={value.indexOf(v.value) !== -1}
            disabled={disabled}
            onChange={(e) => this._onChange(v.value, e)}
          >
            {v.label}
          </CheckboxItem>
        ))}
        <WhiteSpace size="lg" />
      </>
    );
  }
}
