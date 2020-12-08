import { ApolloServer  } from 'apollo-server';
import { mergeTypeDefs } from 'graphql-tools';
import { getCustomRepository } from "typeorm";

import "./database/connection";
import "reflect-metadata";


import userSchema from './schemas/user';
import userResolvers from './resolvers/user';

import { AppUserRepository } from "./repositories/User"; 

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            userAPI: getCustomRepository(AppUserRepository),
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});