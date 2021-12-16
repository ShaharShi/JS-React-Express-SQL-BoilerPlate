import { db } from "./db";


export async function getUsers() {
  const [users] = await db.query("SELECT * FROM users");
  return users;;
}