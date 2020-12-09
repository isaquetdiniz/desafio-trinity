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
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

<p>
    Minhas escolhas
    Para esse desafio busquei tecnologias que não estava muito bem habituado, no front temos o framework Next.js, no back uma API no formato Graphql, utilizando TypeORM e um banco de dados PostgresSQL

  As the application has didactic purposes, it is not complete in all its aspects, but basically it works as follows, a user can do CRUD type manipulations with Orders and Products where there is a OneToOne relationship between them, that is, each order contains only one product, but a user can have multiple orders following the OneToMany relationship.

  To see the web client, click here: [Coming soon]
</p>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo](https://www.apollographql.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)


## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/isaquetdiniz/desafio-trinity.git && cd desafio-trinity
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name buylist_postgres -e POSTGRES_USER=postgres \
              -e POSTGRES_DB=buylist -e POSTGRES_PASSWORD=buylist \
              -p 5432:5432 -d postgres


# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Isaque Diniz 👋 [See my linkedin](https://www.linkedin.com/in/isaquetdiniz/)
