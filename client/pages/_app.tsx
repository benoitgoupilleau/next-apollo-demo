import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/appolo-client';

type MyAppProps = {
  Component: typeof React.Component;
  pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
