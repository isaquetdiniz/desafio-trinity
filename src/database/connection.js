"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(() => {
    console.log("Successfully connected with database");
})
    .catch((er) => {
    console.log("Error connecting to database", er);
});
