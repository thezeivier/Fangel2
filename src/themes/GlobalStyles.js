import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    background: #F7FEFF;
    color: #14080E;
  }

  @media(min-width:359px) {
    body {
      font-size: 17px;
    }
  }

  @media(min-width:374px) {
    body {
      font-size: 18px;
    }
  }

  @media(min-width:439px) {
    body {
      font-size: 20px;
    }
  }

  @media(min-width:767px) {
    body {
      font-size: 26px;
    }
  }

  @media(min-width:1023px) {
    body {
      font-size: 27px;
    }
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  img {
    border-style: none;
    display: block;
    line-height:0
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [hidden] {
    display: none;
  }
`

export default GlobalStyles
