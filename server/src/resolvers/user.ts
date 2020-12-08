const userResolvers = {
    Query: {
        getUsers: async (parent, args, { dataSources }, info): Promise<void> => {
            return dataSources.userAPI.getAllUsers();
        },
        getUser: async (parent, { userId }, { dataSources }, info): Promise<void> => {
            return dataSources.userAPI.getUser(userId);
        },
    },

    Mutation: {
        createNewUser: async (parent, { user }, { dataSources }, info): Promise<void> => {
            return dataSources.userAPI.createNewUser(user);
        },
        updateUser: async (parent, { userId, newInformations }, { dataSources }, info): Promise<void> => {
            return dataSources.userAPI.updateUser(userId, newInformations);
        },
        deleteUser: async (parent, { userId  }, { dataSources }, info): Promise<void> => {
            return dataSources.userAPI.deleteUser(userId);
        }
    }
}

export default userResolvers;