import { Router } from "express";
import { getBlogs } from "../controller/blog.controller.js";

const router = Router();

// route for save user on db
router.get("/getblogs", getBlogs);

export default router;
