import React from "react";
import { Table, Space, Button } from "antd";

const TableComponent: React.FC = ({ usersData }) => {
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
          <Button type="danger" onClick={() => {}}>
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