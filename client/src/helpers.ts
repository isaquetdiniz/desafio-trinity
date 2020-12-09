import axios from "axios";
import { Modal, message } from "antd";

const createNewUser = async (user) => {
  try {
    const { name, email, phone, zipcode, street, city} = user;
    const body = {
      query: `
            mutation {
                createNewUser(user: {
                  name: "${name}",
                  email: "${email}",
                  phone: "${phone}",
                  zipcode: "${zipcode}",
                  street: "${street}",
                  city: "${city}"
                })
            }
        `,
      variables: {}
    };
  
    const options = {
      headers: {}
    };
  
    const res = await axios.post('http://localhost:4000/graphql', body, options);
    if(res.data.errors) throw new Error;
    const modal = Modal.success({
      content: 'Usuário cadastrado com sucesso!',
    });
    setTimeout(()=> { modal.destroy()}, 1000);
  } catch(err){
    throw new err;
  }
};

const EditUser = async (user) => {
  try {
    const { id, name, email, phone, zipcode, street, city} = user;
    const body = {
      query: `
            mutation {
                updateUser(
                  userId: "${id}",
                  newInformations: {
                  name: "${name}",
                  email: "${email}",
                  phone: "${phone}",
                  zipcode: "${zipcode}",
                  street: "${street}",
                  city: "${city}"
                })
            }
        `,
      variables: {}
    };
  
    const options = {
      headers: {}
    };
  
    const res = await axios.post('http://localhost:4000/graphql', body, options);
    if(res.data.errors) throw new Error;
    const modal = Modal.success({
      content: 'Usuário atualizado com sucesso!',
    });
    setTimeout(()=> { modal.destroy()}, 1000);
  } catch(err){
    throw new err;
  }
};

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
      throw new err;
    }
  };

export {
    createNewUser,
    EditUser,
    deleteUser
}