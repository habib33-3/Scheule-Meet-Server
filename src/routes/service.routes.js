import { Router } from "express";
import {
    receiveContactUs,
    sendEventCreateConfirmation,
    sendEventInvitation,
    sendMeetingCreateConfirmation,
    sendMeetingInvitation,
} from "../controller/service.controller.js";

const router = Router();

// receive mail from contact us form
router.post("/contactUs", receiveContactUs);

// sent meeting creation confirmation email
router.post("/meetingCreate", sendMeetingCreateConfirmation);

// sent event creation confirmation email
router.post("/eventCreate", sendEventCreateConfirmation);

// sent event invitation  email
router.post("/eventInvite", sendEventInvitation);

// sent meeting invitation  email
router.post("/meetingInvite", sendMeetingInvitation);

export default router;
