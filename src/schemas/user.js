"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const userSchema = apollo_server_1.gql `
    type User {
        id: ID!
        name: String!
        email: String!
        phone: String!
        street: String!
        city: String!
        zipcode: String!
    }

    input UserInput {
        name: String
        email: String
        phone: String
        street: String
        city: String
        zipcode: String
    }

    type Query {
        getUsers: [User]!
        getUser(userId: ID!): User
    }

    type Mutation {
        createNewUser(user: UserInput!): String
        updateUser(userId: ID!, newInformations: UserInput!): String
        deleteUser(userId: ID!): String
    }
`;
exports.default = userSchema;
