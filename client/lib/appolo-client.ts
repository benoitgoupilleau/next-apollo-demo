import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;

const client = new ApolloClient({
  uri,
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
