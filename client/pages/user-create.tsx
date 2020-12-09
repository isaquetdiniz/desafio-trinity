import React from "react";
import { Space } from "antd";
import {
    InputForm
  } from "../src/components";

const UserCreate = () => {
    return (
        <Space direction='vertical' align='center' size='large'>
        <h1>Criar novo Usuário</h1>
        <InputForm />
        </Space>
    )
};

export default UserCreate;