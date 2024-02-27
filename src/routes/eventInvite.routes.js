import { Router } from "express";
import { inviteUser } from "../controller/invite.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";

const router = Router();

// routes for invite user
router.post("/inviteUser", verifyToken, inviteUser);

export default router;
