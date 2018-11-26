import * as _ from "lodash";
import * as React from "react";
import { Icon } from "antd";
import classNames from "classnames";
import { JSONSchema } from "../../editor/api/api";
import * as style from "./FileWidgetStyle.pcss";

export interface FileWidgetBean {
    schema: JSONSchema;
    id: string;
    placeholder?: string;
    options?: any;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    type?: string;
    label?: string;
}

export class FileWidget extends React.Component<FileWidgetBean, any> {
    public static defaultProps = {
        disabled: false,
        readonly: false,
        autofocus: false,
    };

    public render() {
        if (_.isEmpty(this.props.id)) {
            console.log("No id for", this.props);
            throw new Error(`no id for props ${JSON.stringify(this.props)}`);
        }

        const { disabled, schema, placeholder, label } = _.merge(
            {},
            FileWidget.defaultProps,
            this.props,
        );

        const { required } = schema;

        const className = classNames("am-list-item am-list-item-middle", style.selectWidget, {
            [style.disabledText]: disabled,
        });

        return (
            <div>
                <div className={className}>
                    <div className="am-list-line">
                        <div className="am-list-content">{label}</div>
                        <div className="am-list-extra">
                            {`${required ? "(必填)" : ""} `}
                            <Icon type="file-text" theme="outlined" />
                        </div>
                    </div>
                    <div
                        className="am-list-ripple"
                        style={{
                            display: "none",
                        }}
                    />
                </div>
            </div>
        );
    }
}
