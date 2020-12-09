import { Input, Modal } from "antd";
import { useRouter } from "next/router";

const InputSearch = ({ dataUsers }) => {
  const router = useRouter();
  const { Search } = Input;

  const onSearch = value => {
    const searchedUser = dataUsers.filter(user => user.email === value)
    if(searchedUser.length == 0) {
      Modal.error({
        title: 'Usuário não encontrado',
        content: 'Nenhum usuário cadastrado com esse email',
      });
    } else {
      router.push(`/users/${searchedUser[0].id}`)
    }
  };

  return(
    <Search placeholder="Pesquisar Usuário" onSearch={onSearch} style={{ width: 500 }} enterButton/>
  )
};

export default InputSearch;