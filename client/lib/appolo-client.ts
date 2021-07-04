import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import { onError } from '@apollo/client/link/error';

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;
const httpLink = new HttpLink({
  uri,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          names: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default client;
