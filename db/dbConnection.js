import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function dbConnection() {
  return await open({
    filename: "./db/blog.db",
    driver: sqlite3.Database,
  });
}
