import * as React from "react";

import Form from "react-jsonschema-form";

import widgets from "../../common/silex-h5";

import samples from "../../samples/index";

import * as styles from './h5.style.pcss';

class H5View extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>Welcome to Silex-H5</h1>
        </header>
        <div className={styles.appContent}>
          <Form {...samples.Widgets} widgets={widgets} />
        </div>
      </div>
    );
  }
}

export default H5View;
