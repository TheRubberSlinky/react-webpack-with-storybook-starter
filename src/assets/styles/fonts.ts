import { css } from "styled-components";

import RohnBold from "../fonts/Rohn/rohn_bold.woff2";

export default css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap");

  @font-face {
    font-family: "Rohn";
    src: url(${RohnBold}) format("woff2");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Rohn";
    src: url("../fonts/Rohn/rohn_bold_italic.woff2") format("woff2");
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Rohn";
    src: url("../fonts/Rohn/rohn_light.woff2") format("woff2");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: "Rohn";
    src: url("../fonts/Rohn/rohn_light_italic.woff2") format("woff2");
    font-style: italic;
    font-weight: 100;
    font-display: swap;
  }
`;
