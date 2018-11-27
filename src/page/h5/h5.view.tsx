import * as React from "react";

import Form from "react-jsonschema-form";

import widgets from "../../common/silex-h5";

import samples from "../../samples/index";

class AppView extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Silex-H5</h1>
        </header>
        <div className="App-Content">
          <Form {...samples.Widgets} widgets={widgets} />
        </div>
      </div>
    );
  }
}

export default AppView;
