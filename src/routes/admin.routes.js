import { Router } from "express";
import {
    checkAdmin,
    getAllUsers,
    makeAdmin,
} from "../controller/admin.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import verifyAdmin from "../middlewares/verifyAdmin.middleware.js";

const router = Router();

// router to get all users
router.get("/getUsers", verifyToken, verifyAdmin, getAllUsers); //TODO: verify token and verify admin

// make an user admin
router.put("/makeAdmin/:id", makeAdmin); //TODO: verify token and verify admin

// check if admin
router.get("/checkAdmin/:email", checkAdmin);

export default router;
