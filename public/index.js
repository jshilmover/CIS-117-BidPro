import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <HashRouter base="CIS-117-BidPro/">
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
