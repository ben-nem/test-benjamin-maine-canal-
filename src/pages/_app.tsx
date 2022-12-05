import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import * as React from 'react';

import theme from '@/styles/theme';
import Seo from '@/ui/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Seo />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
