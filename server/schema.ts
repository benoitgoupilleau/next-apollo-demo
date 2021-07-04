const faker = require('faker');
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type People {
    name: String
    email: String
    address: String
    phoneNumber: String
  }

  type Query {
    name: String
    names: [People]
  }
`;

const resolvers = {
  Query: {
    name: () => faker.name.findName(),
    names: () =>
      new Array(2000)
        .fill(0)
        .map(() => ({
          name: faker.name.findName(),
          email: faker.internet.email(),
          address: faker.address.streetAddress(),
          phoneNumber: faker.phone.phoneNumber(),
        })),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
