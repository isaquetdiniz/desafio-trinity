"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeorm_1 = require("typeorm");
require("dotenv/config");
require("./database/connection");
require("reflect-metadata");
const user_1 = __importDefault(require("./schemas/user"));
const user_2 = __importDefault(require("./resolvers/user"));
const User_1 = require("./repositories/User");
const typeDefs = [user_1.default];
const resolvers = [user_2.default];
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: typeorm_1.getCustomRepository(User_1.AppUserRepository),
    })
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
