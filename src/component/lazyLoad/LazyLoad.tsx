import * as React from "react";
import {observer} from "mobx-react";

@observer
export class LazyLoad extends React.Component<any, any> {
    public Component;

    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    public componentDidMount() {
        this.loadComponent(this.props.component);
    }

    public componentWillReceiveProps(nextProps) {
        if (nextProps.component !== this.props.component) {
            this.setState({ loaded: false });
            this.loadComponent(nextProps.component);
        }
    }

    public loadComponent = (componentPromise) => {
        componentPromise.then((module) => {
            this.Component = module.default;
            setTimeout(()=>{
                this.setState({ loaded: true });
            })
        });
    };

    public render() {
        const { loaded } = this.state;
        if (loaded === true) {
            return <this.Component {...this.props} />;
        }
        return <div/>;
    }
}
