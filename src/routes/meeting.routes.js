import { Router } from "express";
import {
    createMeeting,
    deleteMeeting,
} from "../controller/meeting.controller.js";

const router = Router();

// route for create meeting
router.post("/createMeeting", createMeeting); //TODO: private route

// route for delete meeting
router.delete("/deleteMeeting", deleteMeeting); //TODO: verify token will be added

export default router;
