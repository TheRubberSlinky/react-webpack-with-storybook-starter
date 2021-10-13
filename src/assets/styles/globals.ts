import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export default createGlobalStyle`
${fonts}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,body {
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 1em;
    line-height: 1;
    font-family: 'Roboto', sans-serif;;
    font-weight: 100;
    background: #fff;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  pre,
  dl,
  dd,
  blockquote,
  input[type="radio"],
  input[type="checkbox"] {
    margin: 0;
  }
  legend {
    padding: 0;
  }
  fieldset,
  ul,
  ol {
    padding: 0;
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  main,
  figure,
  figcaption,
  img {
    display: block;
  } /*--- <main> for IE 11 ---*/
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
  fieldset {
    border: 0;
  }
  input,
  textarea,
  select,
  button {
    display: block;
    max-width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
  label {
    display: table;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="search"] {
    -webkit-appearance: none;
  } /*--- for Safari (add/remove types as needed) ---*/
  button {
    line-height: inherit;
  }
  button::-moz-focus-inner {
    border: 0;
  } /*--- for Firefox ---*/

`;
