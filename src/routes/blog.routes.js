import { Router } from "express";
import { getBlogs, addBlog } from "../controller/blog.controller.js";

const router = Router();

// route for get all blogs
router.get("/getblogs", getBlogs);

// route for get single blogs
// router.get("/getblog/:id", getBlog);

// route for add blogs
router.post("/addBlog", addBlog);

export default router;
