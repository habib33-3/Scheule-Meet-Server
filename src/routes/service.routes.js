import { Router } from "express";
import {
    receiveContactUs,
    sendMeetingCreateConfirmation,
} from "../controller/service.controller.js";

const router = Router();

// receive mail from contact us form
router.post("/contactUs", receiveContactUs);

// sent meeting creation confirmation email
router.post("/meetingCreate", sendMeetingCreateConfirmation);


export default router;
