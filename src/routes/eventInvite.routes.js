import { Router } from "express";

import verifyToken from "../middlewares/verifyToken.middleware.js";
import { inviteToEvent } from "../controller/eventInvite.controller.js";

const router = Router();

// routes for invite user
router.post("/inviteUser", verifyToken, inviteToEvent);

export default router;
