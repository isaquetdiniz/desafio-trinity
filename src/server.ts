import { ApolloServer  } from 'apollo-server';
import { getCustomRepository } from "typeorm";
import 'dotenv/config';

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
    dataSources: (): any => {
        return {
            userAPI: getCustomRepository(AppUserRepository),
        }
    }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});