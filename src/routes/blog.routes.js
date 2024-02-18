import { Router } from "express";
import { SingleBlog, getBlogs, addBlog, SingleBlogByEmailName } from "../controller/blog.controller.js";

const router = Router();

// route for get all blogs
router.get("/getblogs", getBlogs);

// route for get single blogs
router.get("/getblog/:id", SingleBlog);

// route for add blogs
router.post("/addBlog", addBlog);

// route for get blog by email
router.get("/getblogbyEmail/:UserEmail", SingleBlogByEmailName)

export default router;
