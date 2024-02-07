import { Router } from "express";
import {
    createToken,
    logOut,
    saveUserToDb,
    updateUser,
} from "../controller/user.controller.js";

const router = Router();

// route for save user on db
router.post("/saveUser", saveUserToDb);

// route for update user info
router.put("/update/:id", updateUser);

// create token after registration
router.post("/createToken", createToken);

// logout route
router.post("/logout", logOut);

export default router;
