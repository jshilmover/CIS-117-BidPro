import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  React.createElement(
    Provider,
    { store: store },
    React.createElement(
      Router,
      { base: "CIS-117-BidPro/" },
      React.createElement(App, null)
    )
  ),
  document.getElementById("app")
);
