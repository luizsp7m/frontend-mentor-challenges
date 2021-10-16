import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'

import { AppProvider } from '../contexts/AppContext';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}
