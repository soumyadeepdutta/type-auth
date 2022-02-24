import mysql from "mysql2";

export const dbConnection = mysql
  .createPool({
    host: "localhost",
    user: "nodeuser",
    password: "P@ssw0rd",
    database: "cet_testing",
    connectionLimit: 100,
  })
  .promise();
