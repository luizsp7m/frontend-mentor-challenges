import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Barlow Condensed', sans-serif;
  }

  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyle;