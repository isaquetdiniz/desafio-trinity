import React, { useState } from "react";
import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";

import { Card, Popconfirm, Modal } from "antd"
import { EditOutlined, DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { useRouter } from "next/router";

import { InputForm } from "../../src/components";
import { deleteUser } from "../../src/helpers";
import { PageWrapper } from "../styles";

const UserPage = ({ data }) => {
    const [popVisible, setPopVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const router = useRouter()
    const user = data.data.getUser;

    const confirm = () => {
      deleteUser(user.id)
      setPopVisible(false)
      router.push('/')
    };

    const cancel = () => {
      setPopVisible(false)
    };

    const modalOn = () => {
     setEditModalVisible(false)
    }

    const modalOff = () => {
      setEditModalVisible(false)
     }

    return (
        <PageWrapper>
          <Card 
          title="Informações do Usuário"
          actions={[
            <ArrowLeftOutlined key="back" onClick={()=> router.push('/')}/>,
            <EditOutlined key="edit" onClick={()=> setEditModalVisible(true)}/>,
            <Popconfirm
            title="Tem certeza que deseja excluir esse usuário?"
            visible={popVisible}
            onConfirm={confirm}
            onCancel={cancel}
            okText="Sim"
            cancelText="Não"
            >
              <DeleteOutlined key="setting" onClick={()=> {
                setPopVisible(true)
              }}/>
            </Popconfirm>
            
          ]}
          >          
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Telefone: {user.phone}</p>
          <p>CEP: {user.zipcode}</p>
          <p>Rua: {user.street}</p>
          <p>Cidade: {user.city}</p>
          </Card>
          <Modal
          title="Editar usuário"
          visible={editModalVisible}
          onOk={modalOn}
          onCancel={modalOff}
          footer={null}
          >
            <InputForm isEdit dataUser={user}/>
          </Modal>
        </PageWrapper>
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
    
      const response = await axios.post(process.env.GRAPHQL_URL, body, options);
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
                  id
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
  
    const response = await axios.post(process.env.GRAPHQL_URL, body, options);
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