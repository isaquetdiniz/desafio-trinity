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
        name: String!
        email: String!
        phone: String!
        street: String!
        city: String!
        zipcode: String!
    }

    type Query {
        hello: String
        getUsers: [User]!
        getUser(userId: ID!): User
    }

    type Mutation {
        createUser: User!
        updateUser(userId: ID!, newInformations: UserInput): User!
        deleteUser(userId: ID!): String!
    }
`;

export default userSchema;