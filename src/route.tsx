import * as React from "react";
import LazyLoad from "./component/lazyLoad";


export interface IRoute {
    path: string;
    render: any;
}

export const routes: IRoute[] = [
    {
        path: "/datas",
        render: (props) => <LazyLoad {...props} component={import("./page/datas")}/>,
    },
    {
        path: "/editor",
        render: (props) => <LazyLoad {...props} component={import("./page/editor")}/>,
    },
    {
        path: "/h5",
        render: (props) => <LazyLoad {...props} component={import("./page/h5")}/>,
    },
    {
        path: "/templates",
        render: (props) => <LazyLoad {...props} component={import("./page/templates")}/>,
    },
    {
        path: "/web",
        render: (props) => <LazyLoad {...props} component={import("./page/web")}/>,
    }
]