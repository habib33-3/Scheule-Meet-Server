import { Router } from "express";
import { getBlog, getBlogs } from "../controller/blog.controller.js";

const router = Router();

// route for save user on db
router.get("/getblogs", getBlogs);
router.get("/getblog/:id", getBlog);

export default router;
