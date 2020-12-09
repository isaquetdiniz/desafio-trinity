<h1 align="center">
  Desafio Trinity
</h1>

<h3 align="center">
  Aplicação front-end com Next.js e API Graphql Apollo
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/isaquetdiniz/desafio-trinity">

  <a href="https://www.linkedin.com/in/lucasleonardobs/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Isque%20Diniz-gree">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/isaquetdiniz/desafio-trinity">

  <img alt="GitHub" src="https://img.shields.io/github/license/isaquetdiniz/desafio-trinity">
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Tutorial de Instalação/a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>

## 👨🏻‍💻 Sobre o projeto

<p>
    Minhas escolhas
    Para esse desafio busquei tecnologias que não estava muito bem habituado, no front temos o framework Next.js, no back uma API no formato Graphql, utilizando TypeORM e um banco de dados PostgresSQL.
    
    O Resultado
    No fim    
</p>

## 🚀 Tecnologias

Tecnologias que utilizei para construir essa aplicação

- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo](https://www.apollographql.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [ElephantSQL](https://www.elephantsql.com/)
- [Jest](https://jestjs.io/)


## 💻 Tutorial de Instalação

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/isaquetdiniz/desafio-trinity.git && cd desafio-trinity
```

**Siga os passos*

```bash
# Navegue até a pasta do server, instale as dependências e inicie-o com:
$ cd server
$ yarn

# Para esse projeto utilizei um banco de dados que já estava deployado, o ElephantSQL. Crie uma instância para ser usada aqui e copie a url.
# Crie um .env na raiz do projeto com 

DB_TYPE=postgres
DB_URL=<sua_url>

# Agora podemos rodar o servidor com
$ yarn start

# A partir desse momento já é possível realizar querys para nossa API, se quiser abra o Insomnia e tente realizar um query:
query {
  getUsers{
    name
    id
    zipcode
  }
}

# Com o servidor rodando, podemos iniciar o nosso client. Para isso, abra um novo terminal e entre em /desafio-trinity/client
# Instale as dependências com:
$ yarn
# E inicie o Next.js com:
$ yarn dev

# Segure CTRL+<Mouse Esquerdo> em cima do link no terminal para abrir a página em seu navegador

# Prontinho, o projeto está rodando!
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Isaque Diniz 👋 [See my linkedin](https://www.linkedin.com/in/isaquetdiniz/)
