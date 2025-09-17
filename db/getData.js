import { dbConnection } from "./dbConnection.js";

const db = await dbConnection();

try {
  const data = await db.all("SELECT * FROM blogs");

  console.table(data);
} catch (error) {
  console.error("Error retrieving data:", error);
} finally {
  await db.close();
}
