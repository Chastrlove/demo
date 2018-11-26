import * as _ from "lodash";
import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../store/Store";
import * as style from "./RightModuleStyle.pcss";
import { MyForm } from "../../lib/form";
import { toJS } from "mobx";
import { toJSDeep } from "../../lib/util";

@observer
export class RightModule extends React.Component<{ store: Store }, any> {
    public onChange = (...arg) => {
        const store = this.props.store;

        const formData = (arg && arg.length > 0 && (arg as any)[0].formData) || {};

        if (!_.isEmpty(formData)) {
            store.setCurrentForm(formData);
        }
    };

    public render() {
        const { rightModule } = this.props.store;

        const {
            schema,
            uiSchema,
            formData,
            uiDefinitions,
            definitions,
        } = rightModule.getCurrentForm();

        console.log(
            "schema",
            toJS(schema),
            "uiSchema",
            toJS(uiSchema),
            "formData",
            toJS(formData),
            "uiDefinitions",
            toJS(uiDefinitions),
            "definitions",
            toJS(definitions),
        );

        if (schema && schema.definitions) {
            return (
                <div className={style.rightModule}>
                    <MyForm
                        schema={toJSDeep({
                            ...schema,
                            properties: schema.definitions,
                            type: "object",
                            definitions,
                        })}
                        uiSchema={toJSDeep(uiDefinitions)}
                        formData={toJSDeep(formData)}
                        onChange={this.onChange}
                    >
                        <div style={{ display: "none" }}>submit</div>
                    </MyForm>
                </div>
            );
        } else {
            return <div className={style.rightModule}>不存在该field！</div>;
        }
    }
}
