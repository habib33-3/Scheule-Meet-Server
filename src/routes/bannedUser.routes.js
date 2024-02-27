import { Router } from "express";
import {
    banUser,
    getBanUsers,
    unBanUser,
} from "../controller/bannedUser.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import verifyAdmin from "../middlewares/verifyAdmin.middleware.js";

const router = Router();

// route to ban user
router.post("/banUser", verifyToken, verifyAdmin, banUser);

// route to unBan user
router.delete("/unBan/:id", verifyToken, verifyAdmin, unBanUser);

// route to unBan user
router.get("/getBanned/", verifyToken, verifyAdmin, getBanUsers);

export default router;
