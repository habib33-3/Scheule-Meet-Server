import { Router } from "express";
import { banUser } from "../controller/bannedUser.controller";

const router = Router();

// route to ban user
router.post("/banUser", banUser); //TODO: verify token and verify admin will be added


export default router