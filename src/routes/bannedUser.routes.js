import { Router } from "express";
import {
    banUser,
    getBanUsers,
    unBanUser,
} from "../controller/bannedUser.controller.js";

const router = Router();

// route to ban user
router.post("/banUser", banUser); //TODO: verify token and verify admin will be added

// route to unBan user
router.delete("/unBan/:id", unBanUser); //TODO: verify token and verify admin will be added

// route to unBan user
router.get("/getBanned/", getBanUsers); //TODO: verify token and verify admin will be added

export default router;