import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: hsl(0, 0%, 98%);
    --gray: hsl(0, 0%, 41%);
    --black: hsl(0, 0%, 8%);
  }

  html {
    font-size: 62.5%;
  }
  
  body, input, button {
    font-family: "Epilogue", sans-serif;
  }

  body {
    background: var(--white);
  }

  @media(max-width: 475px) {
    html {
    font-size: 50%;
  }
  }
`;