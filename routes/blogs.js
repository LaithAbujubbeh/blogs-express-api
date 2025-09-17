import { getBlogs } from "../controller/getBlogs.js";
import express from "express";

export const router = express.Router();

router.get("/blogs", getBlogs);
