import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'

import { AppProvider } from '../contexts/AppContext';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}
