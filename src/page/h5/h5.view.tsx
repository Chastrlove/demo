import * as React from "react";

import SilexH5 from "../../common/silex-h5";

import { H5Store } from './h5.store';

import * as styles from './h5.style.pcss';

class H5View extends React.Component {
  public store = new H5Store();

  constructor(props) {
    super(props);

    this.state={
      ...this.store.samples,
      onSubmit: (data) => {
        console.log(data.formData);
      }
    };
  }

  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>Welcome to Silex-H5</h1>
        </header>
        <div className={styles.appContent}>
          <SilexH5 {...this.state} />
        </div>
      </div>
    );
  }
}

export default H5View;
