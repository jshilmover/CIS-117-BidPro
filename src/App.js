import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap";
import "../src/styles.css";
import "popper.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudArrowDown,
  faAnglesRight,
  faXmark,
  faBrush,
  faPlus,
  faArrowsRotate,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import HomePage from "./pages/home/HomePage";
import AABidTypesPage from "./pages/american-airlines/AABidTypesPage.jsx";
import AAPilotsPage from "./pages/american-airlines/AAPilotsPage.jsx";
import ASPilotsPage from "./pages/alaska-airlines/ASPilotsPage.jsx";
import FAPilotsPage from "./pages/frontier-airlines/FAPilotsPage.jsx";
import UPPilotsPage from "./pages/ups/UPPilotsPage.jsx";

function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      Switch,
      null,
      React.createElement(Route, {
        exact: true,
        path: "/",
        component: HomePage,
      }),
      React.createElement(Route, {
        path: "/american-airlines/bidtypes",
        component: AABidTypesPage,
      }),
      React.createElement(Route, {
        path: "/american-airlines/pilots",
        component: AAPilotsPage,
      }),
      React.createElement(Route, {
        path: "/alaska-airlines/pilots",
        component: ASPilotsPage,
      }),
      React.createElement(Route, {
        path: "/frontier-airlines/pilots",
        component: FAPilotsPage,
      }),
      React.createElement(Route, {
        path: "/ups/pilots",
        component: UPPilotsPage,
      })
    )
  );
}

library.add(
  faCloudArrowDown,
  faAnglesRight,
  faXmark,
  faBrush,
  faPlus,
  faArrowsRotate,
  faLocationDot
);
export default App;
