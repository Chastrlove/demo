import { Button } from "antd";
import * as React from "react";
import { connect } from "../../store";

class Actions extends React.PureComponent {
    public render() {
        return (
            <>
                <Button onClick={this.clearAll} htmlType={"button"}>
                    ssss
                </Button>
            </>
        );
    }
    private clearAll = () => {};
}

export default connect<any>((state) => state)(Actions);
