"use strict";
require("dotenv/config");
module.exports = {
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
};
