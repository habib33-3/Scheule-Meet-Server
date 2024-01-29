import { Router } from "express";
import { createEvent } from "../controller/event.controller.js";

const router = Router();

// route for create event
router.post("/createEvent", createEvent); //TODO: private route

export default router;
