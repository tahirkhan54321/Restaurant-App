import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./components/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
); //mounting application on to root div
