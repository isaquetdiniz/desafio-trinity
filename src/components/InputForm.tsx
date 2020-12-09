import React, { useEffect } from "react";
import { Input, Button, Form, Modal } from "antd";
import axios from "axios";

import { useRouter } from "next/router";

import { createNewUser, EditUser } from "../helpers";

const InputForm = ({ isEdit, dataUser }: any) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const submitNewUser = async (values) => {
    const { zipcode, name, email, phone } = values;
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
      const { data } = res;
      const { cep, logradouro: street, localidade: city } = data;
      await createNewUser({
          name, 
          email,
          phone,
          zipcode: cep,
          street,
          city
      });
      router.push('/')
    } catch(err){
      Modal.error({
        title: 'Erro ao cadastrar',
        content: 'Cheque se as informações inputadas são válidas..',
      });
    }
  };

  const submitEditUser = async (values) => {
    const { id, zipcode, name, email, phone } = values;
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
      const { data } = res;
      const { cep, logradouro: street, localidade: city } = data;
      await EditUser({
          id,
          name, 
          email,
          phone,
          zipcode: cep,
          street,
          city
      });
      router.push('/')
    } catch(err){
      Modal.error({
        title: 'Erro ao editar',
        content: 'Cheque se as informações inputadas são válidas..',
      });
    }
  };

  const submitFailed = () => {
    Modal.error({
      title: 'Erro ao cadastrar',
      content: 'Cheque se as informações inputadas são válidas..',
    });
  };

  useEffect(()=>{
    if(isEdit && dataUser) {
      const { id, name, email, phone, zipcode } = dataUser;
      form.setFieldsValue({
        id,
        name,
        email,
        phone,
        zipcode
      })
    }
  }, []);

  return (
    <>
      <Form
        {...layout}
        name="basic"
        form={form}
        onFinish={isEdit? submitEditUser: submitNewUser}
        onFinishFailed={submitFailed}
      >
         <Form.Item
          label="id"
          name="id"
          hidden={true}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
        >
          <Input placeholder="Usuário X"/>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Por favor, insira seu email" }]}
        >
          <Input placeholder="usuario.x@gmail.com"/>
        </Form.Item>
        <Form.Item
          label="Telefone"
          name="phone"
          rules={[{ required: true, message: "Por favor, insira seu telefone" }]}
        >
          <Input placeholder="81982218902"/>
        </Form.Item>
        <Form.Item
          label="CEP"
          name="zipcode"
          rules={[{ required: true, message: "Por favor, insira seu cep!" }]}
        >
          <Input placeholder="54759060"/>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Salvar Usuário
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default InputForm;