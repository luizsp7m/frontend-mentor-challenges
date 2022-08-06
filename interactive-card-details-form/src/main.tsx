import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
