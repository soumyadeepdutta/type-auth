import { execFile } from "child_process";
import path from "path";
import { promisify } from "util";

const asyncExecFile = promisify(execFile);
// const BLOWFISH_PRE = "$2a$05$";
// const BLOWFISH_END = "$";
// const ALLOWED_CHARS =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./";

/**
 *
 * @param length salt lenght
 * @returns random alphanumeric character of given length
 */
export function generateSalt(length = 32) {
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

/**
 *
 * @param user_password
 * @param salt
 */
export async function getEncrypedPassword(
  user_password: string,
  salt: string
): Promise<string> {
  // let hashedPassword = "";
  // const executableScript =
  const { stdout } = await asyncExecFile("php", [
    "./script/encrypt-password.php",
    user_password,
    salt,
  ]);
  return stdout;
}
