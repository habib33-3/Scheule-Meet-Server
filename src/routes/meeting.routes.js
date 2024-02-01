import { Router } from "express";
import {
    createMeeting,
    deleteMeeting,
    updateMeeting,
} from "../controller/meeting.controller.js";

const router = Router();

// route for create meeting
router.post("/createMeeting", createMeeting); //TODO: private route

// route for delete meeting
router.delete("/deleteMeeting/:id", deleteMeeting); //TODO: verify token will be added

// route for update meeting
router.put("/updateMeeting/:id", updateMeeting); //TODO: verify token will be added

export default router;
