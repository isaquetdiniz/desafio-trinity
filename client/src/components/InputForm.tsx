import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Input, Button, Form, Modal } from "antd";

const InputForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

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
      router.push('/');
    } catch(err){
      Modal.error({
        title: 'Erro ao cadastrar',
        content: 'Cheque se as informações inputadas são válidas...',
      });
    }
  };

  const submitSuccess = async (values) => {
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
    } catch(err){
      Modal.error({
        title: 'Erro ao cadastrar',
        content: 'CEP não válido!.',
      });
    }
  };

  const submitFailed = () => {
    Modal.error({
      title: 'Erro ao cadastrar',
      content: 'Cheque se as informações inputadas são válidas..',
    });
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        form={form}
        onFinish={submitSuccess}
        onFinishFailed={submitFailed}
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Por favor, insira seu email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telefone"
          name="phone"
          rules={[{ required: true, message: "Por favor, insira seu telefone" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="CEP"
          name="zipcode"
          rules={[{ required: true, message: "Por favor, insira seu cep!" }]}
        >
          <Input />
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