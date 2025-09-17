import express from "express";
import cors from "cors";
import { router } from "./routes/blogs.js";

const PORT = 8000;
const app = express();

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
