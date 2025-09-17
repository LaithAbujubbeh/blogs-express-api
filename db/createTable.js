import { dbConnection } from "./dbConnection.js";
async function createTable() {
  const db = await dbConnection();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL
    )

        `);

  console.log("Table created successfully");

  await db.close();
}

createTable();
