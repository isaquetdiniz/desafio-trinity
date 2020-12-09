const userResolvers = {
    Query: {
        getUsers: async (parent: any, args: any, { dataSources }: any, info: any): Promise<void> => {
            return dataSources.userAPI.getAllUsers();
        },
        getUser: async (parent: any, { userId }: any, { dataSources }: any, info: any): Promise<void> => {
            return dataSources.userAPI.getUser(userId);
        },
    },

    Mutation: {
        createNewUser: async (parent: any, { user }: any, { dataSources }: any, info: any): Promise<void> => {
            return dataSources.userAPI.createNewUser(user);
        },
        updateUser: async (parent: any, { userId, newInformations }: any, { dataSources }: any, info: any): Promise<void> => {
            return dataSources.userAPI.updateUser(userId, newInformations);
        },
        deleteUser: async (parent: any, { userId  }: any, { dataSources }: any, info: any): Promise<void> => {
            return dataSources.userAPI.deleteUser(userId);
        }
    }
}

export default userResolvers;