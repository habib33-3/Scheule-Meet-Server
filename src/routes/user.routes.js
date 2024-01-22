import { Router } from "express";
import { saveUserToDb } from "../controller/user.controller.js";

const router = Router();

// route for save user o db
router.post("/saveUser", saveUserToDb);

export default router;
