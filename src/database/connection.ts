import { createConnection } from "typeorm";

createConnection()
  .then(() => {
    console.log("Successfully connected with database");
  })
  .catch((er) => {
    console.log("Error connecting to database", er);
  });
