import "styled-components";

interface IPalette {
  light: string;
  medium: string;
  dark: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      red: string;
      violet: IPalette;
    }
  }
}