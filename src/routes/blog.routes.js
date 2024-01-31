import { Router } from "express";
import { getBlog, getBlogs, addBlog } from "../controller/blog.controller.js";

const router = Router();

// route for save user on db
router.get("/getblogs", getBlogs);

router.get("/getblog/:id", getBlog);

router.post("/addBlog", addBlog);

export default router;
