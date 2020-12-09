import React from "react";
import axios from "axios";
import { Table, Space, Button } from "antd";

const TableComponent: React.FC = ({ usersData }) => {
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
      await axios.post('http://localhost:4000/graphql', body, options)
    } catch(err) {
      console.log(err);
    }
  };


  const dataSource = usersData;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: "Opções",
      dataIndex: "options",
      key: "options",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {}}
          >
            Informações
          </Button>
          <Button
            onClick={() => {}}
          >
            Editar
          </Button>
          <Button type="danger" onClick={() => deleteUser(record.id)}>
            Deletar
          </Button>
        </Space>
      ),
    },
  ];

  return(
      <Table dataSource={dataSource} columns={columns} />
  )
}

export default TableComponent;