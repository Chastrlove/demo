import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppView from '../index/app.view';
import './index.css';
import registerServiceWorker from '../../registerServiceWorker';

ReactDOM.render(
  <AppView />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
