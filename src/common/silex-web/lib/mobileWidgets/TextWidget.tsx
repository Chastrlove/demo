import * as _ from "lodash";
import * as React from "react";
import classNames from "classnames";
import { JSONSchema } from "../../editor/api/api";
import * as style from "./TextWidgetStyle.pcss";

export interface TextWidgetBean {
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

export class TextWidget extends React.Component<TextWidgetBean, any> {
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

        const { value, readonly, disabled, options, schema, placeholder, label } = _.merge(
            {},
            TextWidget.defaultProps,
            this.props,
        );

        const { required } = schema;

        const className = classNames(
            "am-list-item am-input-item am-list-item-middle am-input-focus am-input-android",
            [style.textWidget],
            {
                [style.disabledText]: disabled,
            },
        );

        return (
            <div className={className}>
                <div className="am-list-line">
                    <div className="am-input-label am-input-label-5">{label}</div>
                    <div className="am-input-control">
                        <input
                            placeholder={`${required ? "(必填)" : ""} ${placeholder}`}
                            type="text"
                            value=""
                            readOnly={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
