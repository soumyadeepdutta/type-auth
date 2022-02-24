import { RowDataPacket, FieldPacket } from "mysql2";
import { dbConnection } from "../../db/connection";
import { USERS } from "../config/table";
import {
  generateSalt,
  getEncrypedPassword,
} from "../functions/password-manager";

export async function createUser(username: string, password: string) {
  const salt = generateSalt(18);
  console.log(salt);

  const encryptedPassword = getEncrypedPassword(password, salt);
  console.log("creating user 1");
  const [rows] = await dbConnection.query(
    `INSERT INTO ${USERS} username, password, salt VALUES(?,?,?)`,
    [username, encryptedPassword, salt]
  );
  console.log(rows);
  return rows;
}
