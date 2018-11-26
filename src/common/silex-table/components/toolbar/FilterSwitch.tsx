import { Form, Icon, Radio } from "antd";
import * as React from "react";
import { actions, connect } from "../../store";

export interface IFilterSwitchProps {
    search: "search" | "unSearch";
}
class FilterSwitch extends React.PureComponent<IFilterSwitchProps> {
    public render() {
        const { search } = this.props;
        return (
            <Form.Item>
                <Radio.Group value={search} onChange={this.onChange}>
                    <Radio.Button value="search">
                        <Icon type="file-search" theme="outlined" /> 搜索
                    </Radio.Button>
                    <Radio.Button value="unSearch">
                        <Icon type="stop" theme="outlined" /> 隐藏
                    </Radio.Button>
                </Radio.Group>
            </Form.Item>
        );
    }
    private onChange = (e) => {
        actions.changeSearch(e.target.value);
        console.log("onChange");
    };
}

export default connect<any>(({ search }) => ({ search }))(FilterSwitch);
