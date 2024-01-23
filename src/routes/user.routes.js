import { Router } from "express";
import { createToken, saveUserToDb } from "../controller/user.controller.js";

const router = Router();

// route for save user to db
router.post("/saveUser", saveUserToDb);

// route for create jwt token
router.post("/createToken", createToken);

export default router;
