import { dbConnection } from "./dbConnection.js";
import { data } from "../data/data.js";

async function seedTable() {
  const db = await dbConnection();

  try {
    await db.exec("BEGIN TRANSACTION");

    for (const { title, content, author } of data) {
      db.run("INSERT INTO blogs (title,content,author) VALUES (?,?,?)", [
        title,
        content,
        author,
      ]);
    }

    await db.exec("COMMIT");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await db.close();
    console.log("Database connection closed.");
  }
}

seedTable();
