import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  // prevents text selection
  * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  }

  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  html, body {
    max-width: 100vw;
    min-height: 100vh;
    display: grid;
    place-content: center;
  }


  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  body {
    line-height: 1.25;
    background: linear-gradient(to bottom right, #ffb3d9, #b3daff);
  }

  a {
    background: transparent;
    border: none;
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    color: #66b5ff;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    width: 50%;
    transition: 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      background: #66b5ff;
      color: white;
    }
  }
`;
