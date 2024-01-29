import { Router } from "express";
import { createMeeting } from "../controller/meeting.controller.js";

const router = Router();

// route for create meeting
router.post("/createMeeting", createMeeting); //TODO: private route

export default router;
