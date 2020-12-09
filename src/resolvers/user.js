"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userResolvers = {
    Query: {
        getUsers: async (parent, args, { dataSources }, info) => {
            return dataSources.userAPI.getAllUsers();
        },
        getUser: async (parent, { userId }, { dataSources }, info) => {
            return dataSources.userAPI.getUser(userId);
        },
    },
    Mutation: {
        createNewUser: async (parent, { user }, { dataSources }, info) => {
            return dataSources.userAPI.createNewUser(user);
        },
        updateUser: async (parent, { userId, newInformations }, { dataSources }, info) => {
            return dataSources.userAPI.updateUser(userId, newInformations);
        },
        deleteUser: async (parent, { userId }, { dataSources }, info) => {
            return dataSources.userAPI.deleteUser(userId);
        }
    }
};
exports.default = userResolvers;
