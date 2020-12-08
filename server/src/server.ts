import { ApolloServer  } from 'apollo-server';
import { mergeTypeDefs } from 'graphql-tools';

import "./database/connection";
import "reflect-metadata";


import userSchema from './schemas/user';
import userResolvers from './resolvers/user';

const typeDefs = mergeTypeDefs([userSchema]);
const resolvers = [userResolvers];

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});