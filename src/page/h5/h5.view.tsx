import * as React from "react";
import { observer } from 'mobx-react';

import * as _ from 'lodash';

import SilexH5 from "../../common/silex-h5";

import { H5Store } from './h5.store';

import * as styles from './h5.style.pcss';

@observer
class H5View extends React.Component {
  public store = new H5Store();

  public onSubmit = (data) => {

    this.store.addData({data: data.formData}).then(result => {
      console.log(result);
    });
  };

  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>Welcome to Silex-H5</h1>
        </header>
        <div className={styles.appContent}>
          <SilexH5 {...this.store.samples} onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default H5View;
