import { Router } from "express";
import {
    createEvent,
    deleteEvent,
    getEvent,
    getSingleEvent,
    updateEvent,
} from "../controller/event.controller.js";

const router = Router();

// route for create event
router.post("/createEvent", createEvent); //TODO: private route

// route for delete event
router.delete("/deleteEvent/:id", deleteEvent); //TODO: verify token will be added

// route for update event
router.put("/updateEvent/:id", updateEvent); //TODO: verify token will be added

// route for get event data
router.get("/getEvents", getEvent);

// route for get event data
router.get("/getEvent/:id", getSingleEvent);

// route for delete event
router.delete("/deleteEvent/:id", deleteEvent); //TODO: verify token will be added

// route for update event
router.put("/updateEvent/:id", updateEvent); //TODO: verify token will be added

export default router;
