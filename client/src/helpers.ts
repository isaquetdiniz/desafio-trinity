import axios from "axios";

const deleteUser = async (id: string) => {
    try {
      const body = {
        query: `
              mutation {
                  deleteUser(userId: "${id}")
              }
          `,
        variables: {}
      };
    
      const options = {
        headers: {}
      };
      await axios.post('http://localhost:4000/graphql', body, options)
    } catch(err) {
      console.log(err);
    }
  };

export {
    deleteUser
}