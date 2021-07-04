const faker = require('faker');
import { ApolloServer, gql } from 'apollo-server-express';

const names = new Array(2000)
  .fill(0)
  .map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.phoneNumber(),
  }))
  .sort((a, b) => (a.name > b.name ? 1 : -1));

const typeDefs = gql`
  type People {
    id: String
    name: String
    email: String
    address: String
    phoneNumber: String
  }

  type Query {
    name: String
    names(offset: Int, limit: Int): [People!]
  }
`;

type NamesVariables = {
  offset: number;
  limit: number;
};

const resolvers = {
  Query: {
    name: () => faker.name.findName(),
    names: (_: any, { offset, limit }: NamesVariables) => {
      return names;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
