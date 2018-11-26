import * as React from "react";
import * as ReactDOM from "react-dom";
import { sample } from "./sample";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { Editor } from "../editor/Editor";

// configure({
//     enforceActions: "always",
// });

console.log(sample);

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Editor />
    </LocaleProvider>,
    document.getElementById("app"),
);
