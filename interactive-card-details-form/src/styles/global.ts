import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: "Space Grotesk", sans-serif;
  }

  @media(max-width: 475px) {
    html {
      font-size: 50%;
    }
  }
`;