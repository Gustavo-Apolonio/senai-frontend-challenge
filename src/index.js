import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./assets/styles/GlobalCSS.js";

import Router from "./routes.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
