"use strict";
require("dotenv/config");
module.exports = {
    type: process.env.DB_TYPE,
    url: process.env.DB_URL,
    synchronize: true,
    logging: false,
    entities: [
        "src/models/*.js"
    ],
    migrations: [
        "src/migrations/*.js"
    ],
    cli: {
        "migrationsDir": "src/database/migrations"
    }
};
