import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>ClickBeard</title>
        <link rel="shortcut icon" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Old+Standard+TT:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#351B0C" />
        <meta
          name="description"
          content="O barbeiro certo para o homem moderno 💈"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
