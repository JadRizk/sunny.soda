import { GlobalStyle, theme } from '@sunny.soda/ui-shared';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { DAppProvider, Config, Mainnet } from '@usedapp/core';
import './styles.css';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
};

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DAppProvider config={config}>
        <GlobalStyle />
        <Head>
          <title>Welcome to app!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </DAppProvider>
    </ThemeProvider>
  );
}

export default CustomApp;
