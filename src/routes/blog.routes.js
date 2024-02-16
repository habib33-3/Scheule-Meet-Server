import { Router } from "express";
import { SingleBlog, getBlogs, addBlog } from "../controller/blog.controller.js";

const router = Router();

// route for get all blogs
router.get("/getblogs", getBlogs);

// route for get single blogs
router.get("/getblog/:id", SingleBlog);

// route for add blogs
router.post("/addBlog", addBlog);

export default router;
