import React from "react";
import ReactDOM from "react-dom/client";

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>
)
