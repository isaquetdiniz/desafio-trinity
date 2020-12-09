import React from "react";
import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";

import { Card } from "antd"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { useRouter } from "next/router";

import { deleteUser } from "../../src/helpers";

const UserPage = ({ data }) => {
    const user = data.data.getUser;
    return (
        <Card 
        title="Informações do Usuário"
        actions={[
            <DeleteOutlined key="setting" onClick={()=> {}}/>,
            <EditOutlined key="edit" />,
          ]}
        >
            {user.name},
            {user.email},
            {user.phone},
            {user.zipcode},
            {user.street},
            {user.city}
        </Card>
    )
};

export default UserPage;

const getStaticPaths: GetStaticPaths = async () => {
    const body = {
        query: `
              query {
                  getUsers{
                    id
                  }
              }
          `,
        variables: {}
      };
    
      const options = {
        headers: {}
      };
    
      const response = await axios.post('http://localhost:4000/graphql', body, options);
      const { data } = response.data;
      const params = data.getUsers.map(user => ({ params: { user: user.id}}));
    return {
        paths: params,
        fallback: true
    }
};

const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const body = {
      query: `
            query {
                getUser(userId: "${params.user}"){
                  name
                  email
                  phone
                  zipcode
                  street
                  city
                }
            }
        `,
      variables: {}
    };
  
    const options = {
      headers: {}
    };
  
    const response = await axios.post('http://localhost:4000/graphql', body, options);
    const { data } = response;
    return {
      props:{
        data,
      },
      revalidate: 5
    }
  }
  
export { getStaticProps }
export { getStaticPaths }