import axios from "axios";
import { message } from "antd";

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
      await axios.post('http://localhost:4000', body, options)
      message.success('Usuário deletado!');
    } catch(err) {
        console.log(err);
    }
  };

export {
    deleteUser
}