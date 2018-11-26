import * as React from "react";
import * as ReactDOM from "react-dom";

import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { Editor } from "../editor/Editor";

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Editor />
    </LocaleProvider>,
    document.getElementById("app"),
);
