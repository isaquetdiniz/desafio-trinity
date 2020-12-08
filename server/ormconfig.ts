export = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "trinity_db",
  synchronize: true,
  logging: true,
  entities: [
     "src/models/*.ts"
  ],
  migrations: [
     "src/migrations/*.ts"
  ],
  cli: {
    "migrationsDir": "src/database/migrations"
  }
}