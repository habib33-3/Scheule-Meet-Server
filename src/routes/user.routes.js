import { Router } from "express";
import {
    createToken,
    getAllUsers,
    logOut,
    saveUserToDb,
} from "../controller/user.controller.js";

const router = Router();

// route for save user on db
router.post("/saveUser", saveUserToDb);

// router to get all users
router.get("/getUsers", getAllUsers);

// create token after registration
router.post("/createToken", createToken);

// logout route
router.post("/logout", logOut);

export default router;
