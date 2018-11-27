import * as React from "react";
import * as ReactDOM from "react-dom";

import H5View from "../../page/h5/h5.view";
import './index.css';

import registerServiceWorker from '../../registerServiceWorker';

ReactDOM.render(
  <H5View />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

