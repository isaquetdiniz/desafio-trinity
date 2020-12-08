import { gql } from 'apollo-server';

const userSchema = gql`
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

export default userSchema;