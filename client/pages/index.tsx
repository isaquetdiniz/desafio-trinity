import React from "react";
import axios from "axios";

import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import {
  InputSearch,
} from "../src/components";

import { Button, Space } from "antd";

const Home = ({ data }) => {
  const router = useRouter();
  const { getUsers: users } = data.data;

  return (
    <Space>
    <InputSearch dataUsers={users}/>
    <Button type="primary" onClick={()=> router.push('/user-create')}>Criar usuário</Button>
    </Space>
  )
}

const getStaticProps: GetStaticProps = async () => {
  const body = {
    query: `
          query {
              getUsers{
                id
                email
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

export default Home
export { getStaticProps }
