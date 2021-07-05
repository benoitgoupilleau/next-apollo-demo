"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require('faker');
const apollo_server_express_1 = require("apollo-server-express");
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
const typeDefs = apollo_server_express_1.gql `
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
const resolvers = {
    Query: {
        name: () => faker.name.findName(),
        names: (_, { offset, limit }) => {
            return names;
        },
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
exports.default = server;
//# sourceMappingURL=schema.js.map