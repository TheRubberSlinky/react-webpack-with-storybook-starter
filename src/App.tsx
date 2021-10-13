import React from "react";
import Router from "./Router";

import GlobalStyles from "./assets/styles/globals";
import Theme from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;
