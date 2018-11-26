import * as React from "react";
import * as style from "./SpaceStyle.pcss";

export default class SpaceWidget extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        // Note: since React 15.2.0 we can't forward unknown element attributes, so we
        // exclude the "options" and "schema" ones here.
        if (!this.props.id) {
            console.log("No id for", this.props);
            throw new Error(`no id for props ${JSON.stringify(this.props)}`);
        }

        return (
            <>
                <div className={style.whitespace} />
            </>
        );
    }
}
