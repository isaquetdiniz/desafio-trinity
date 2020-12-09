import React from "react";
import { useRouter } from "next/router";
import { Space, Card } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
    InputForm
  } from "../src/components";

import {
    PageWrapper
} from "./styles/user-create";

const UserCreate = () => {
    const router = useRouter()
    return (
        <PageWrapper>
            <Space direction="vertical" align="center" size="large">
                <Space direction="horizontal" align="center" size="large">
                    <ArrowLeftOutlined onClick={()=> router.push('/')}/> 
                    <h1>Criar novo Usuário</h1>
                </Space>
                <Card>
                    <InputForm />
                </Card>
            </Space>
        </PageWrapper>
    )
};

export default UserCreate;