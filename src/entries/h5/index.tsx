import * as React from "react";
import * as ReactDOM from "react-dom";

import AppView from "../../page/h5/h5.view";

import registerServiceWorker from '../../registerServiceWorker';

ReactDOM.render(
  <AppView />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
