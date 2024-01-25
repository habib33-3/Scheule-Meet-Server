import { Router } from "express";
import { createMeeting } from "../controller/meeting.controller.js";


const router = Router();

// route for save user on db
router.post("/createMeeting", createMeeting);

export default router;
