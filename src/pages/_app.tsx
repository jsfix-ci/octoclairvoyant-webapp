import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import customTheme from 'customTheme';
import { globalStyles } from 'global';
import * as gtag from 'gtag';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import 'highlight.styles.github.min.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', (url) => {
  gtag.pageView(url);
  NProgress.done();
});

const queryConfig = { refetchAllOnWindowFocus: false, retry: 0 };

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ReactQueryConfigProvider config={queryConfig}>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </ReactQueryConfigProvider>
);

export default MyApp;
