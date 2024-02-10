import { Router } from "express";
import {
    createToken,
    getUser,
    getUserByEmail,
    logOut,
    saveUserToDb,
    updateUser,
} from "../controller/user.controller.js";

const router = Router();

// route for save user on db
router.post("/saveUser", saveUserToDb);

// route for update user info
router.put("/update/:id", updateUser);

// router for get single user by id
router.get("/getUser/:id", getUser);

// router for get single user by email
router.get("/user/:email", getUserByEmail);

// create token after registration
router.post("/createToken", createToken);

// logout route
router.post("/logout", logOut);

export default router;
