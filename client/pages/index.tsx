import React from "react";
import axios from "axios";

import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import { Button, Space } from "antd";

import {
  InputSearch,
} from "../src/components";

import {
  PageWrapper 
} from "./styles/index";

import Image from "next/image";

const Home = ({ data }) => {
  const router = useRouter();
  const { getUsers: users } = data.data;

  return (
    <PageWrapper>
      <Image 
      src="/trinity.png"
      alt="Trinity Logo"
      width={150}
      height={80}
      />
      <Space>
        <InputSearch dataUsers={users}/>
        <Button type="primary" onClick={()=> router.push('/user-create')}>Criar usuário</Button>
      </Space>
    </PageWrapper>
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

  const response = await axios.post(process.env.GRAPHQL_URL, body, options);
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
