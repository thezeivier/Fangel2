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

  body::-webkit-scrollbar-button:increment,
  body::-webkit-scrollbar-button {
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

  .ReactModalPortal {
    z-index: 1000;
  }

  .ReactModal__Content {
    background: transparent !important;
    color: ${props => props.theme.textColor};
    border-radius: unset !important;
    border: none !important;
    width: 100%;
    padding: 0 !important;
  }

  .ReactModal__Overlay {
    background: rgba(2, 4, 14, 0.82) !important;
    backdrop-filter: blur(10px);
  }

  @media (orientation : landscape) {
    .ReactModal__Content {
      height: 100%;
    }
  }
  
  .watermark,
  .leftwatermark {
    display: none !important;
    visibility: hidden !important;
  }

  .buttonNotMargin {
    padding: 0 10px 10px 10px !important;
  }

  .showMore:after {
    content:'Mostrar más';
    color: white;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-family: ${props => props.theme.secondaryFont};
    color: #8f8f92;
    font-size: 0.97em;
    cursor: pointer;
    transition: .05s;
    will-change: opacity;
    letter-spacing: 0.02em;
    font-weight: ${props => props.theme.weight.light};

    @media(min-width:410px) {
      font-size: 1.04em;
    }

    @media(min-width:1200px) {
      font-size: 1em;
    }
  }
`

export default GlobalStyles
