import { dbConnection } from "../db/dbConnection.js";

export const getBlogs = async (req, res) => {
  try {
    const db = await dbConnection();
    let query = "SELECT * FROM blogs";
    let params = [];
    if (req.query.search) {
      query += " WHERE title LIKE ? OR author LIKE ?";
      params.push(`%${req.query.search}%`);
      params.push(`%${req.query.search}%`);
    }

    const data = await db.all(query, params);
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
