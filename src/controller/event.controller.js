import { Event } from "../models/event.model.js";

const createEvent = async (req, res) => {
    try {
        const event = req.body;

        await Event.create(event);

        return res.status(200).json({
            message: "Event created successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error during event create", error);
        res.status(500).json({
            message: "Error during event create",
            success: false,
        });
    }
};

export { createEvent };
