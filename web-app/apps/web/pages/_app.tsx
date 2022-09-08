import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'services/Apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <div className="font-helvetica">
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
