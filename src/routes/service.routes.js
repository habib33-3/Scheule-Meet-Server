import { Router } from "express";
import { receiveContactUs } from "../controller/service.controller.js";

const router = Router();

router.post("/contactUs", receiveContactUs);

export default router;
