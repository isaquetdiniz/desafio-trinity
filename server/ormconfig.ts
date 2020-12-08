import 'dotenv/config';

export = {
  type: process.env.DB_TYPE,
  url: process.env.DB_URL,
  synchronize: true,
  logging: false,
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