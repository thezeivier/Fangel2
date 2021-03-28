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
    font-size: 13px;
    font-family: 'spartan', sans-serif;
    background: #F7FEFF;
    color: #14080E;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    background: #1F1F24;

    scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
    scrollbar-width: thin;
  }

    @media(min-width:375px) {
    body {
      font-size: 14px;
    }
  }

  @media(min-width:410px) {
    body {
      font-size: 16px;
    }
  }

/*

  @media(min-width:767px) {
    body {
      font-size: 26px;
    }
  }

  @media(min-width:1023px) {
    body {
      font-size: 27px;
    }
  } */

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

  body::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  body::-webkit-scrollbar:vertical {
    width:10px;
    background: #1F1F24;
  }

  body::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
  } 

  body::-webkit-scrollbar:horizontal {
    height: 10px;
    background: #1F1F24;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colorBar};
    border-radius: 20px;
  }

  body::-webkit-scrollbar-track {
    border-radius: 10px;  
  }
`

export default GlobalStyles
