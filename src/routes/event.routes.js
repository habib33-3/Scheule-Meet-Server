import { Router } from "express";
import {
    bookEvent,
    createEvent,
    deleteEvent,
    getEvents,
    getEventsByEmail,
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
router.get("/getEvents", getEvents);

// route for get event data by email
router.get("/events/:email", getEventsByEmail);

// route for get event data
router.get("/getEvent/:id", getSingleEvent);

// route for delete event
router.delete("/deleteEvent/:id", deleteEvent); //TODO: verify token will be added

// route for update event
router.put("/updateEvent/:id", updateEvent); //TODO: verify token will be added

// route for book event
router.put("/bookEvent", bookEvent);

export default router;
