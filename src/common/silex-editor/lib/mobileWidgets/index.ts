/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: index.ts
 */
import { TextWidget } from "./TextWidget";
import { FileWidget } from "./FileWidget";
import { SelectWidget } from "./SelectWidget";
import { SpaceWidget } from "./SpaceWidget";

export default {
    BaseInput: TextWidget,
    PasswordWidget: TextWidget,
    RadioWidget: SelectWidget,
    UpDownWidget: TextWidget,
    RangeWidget: TextWidget,
    SelectWidget,
    TextWidget,
    DateWidget: SelectWidget,
    DateTimeWidget: SelectWidget,
    AltDateWidget: SelectWidget,
    AltDateTimeWidget: SelectWidget,
    EmailWidget: TextWidget,
    URLWidget: TextWidget,
    TextareaWidget: TextWidget,
    HiddenWidget: TextWidget,
    ColorWidget: TextWidget,
    FileWidget,
    CheckboxWidget: SelectWidget,
    CheckboxesWidget: SelectWidget,
    WhiteSpaceWidget: SpaceWidget,
};
