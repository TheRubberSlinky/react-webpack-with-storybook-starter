import React from "react";

import GlobalStyles from "../src/assets/styles/globals";

import Theme from "../src/assets/styles/theme";
import { ThemeProvider } from "styled-components";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
