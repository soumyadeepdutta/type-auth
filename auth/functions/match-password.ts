// import { dbConnection } from "../../db/connection";
// import { USERS } from "../config/table";

// export function matchPassword(
//   username: string,
//   user_password: string
// ): boolean {
//   dbConnection
//     .promise()
//     .query(`SELECT password FROM ${USERS} WHERE username='${username}'`)
//     .then(([rows, fields]) => {
//       console.log(rows);
//     })
//     .catch(console.log)
//     .then(() => dbConnection.end());
//   return false;
// }
