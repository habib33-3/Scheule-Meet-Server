import { Router } from "express";
import { inviteUser } from "../controller/invite.controller.js";

const router = Router();

// routes for invite user
router.post("/inviteUser", inviteUser);

export default router;
