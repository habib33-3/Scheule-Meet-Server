import { Event } from "../models/event.model.js";

// post api operation
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

// get api operation
const getEvent = async (req, res) => {
    try {
        const events = await Event.find();
        return res.status(200).json({
            message: "Event data loaded successfully",
            success: true,
            events
        });

    } catch (error) {
        console.error("Error during event data loading", error);
        res.status(500).json({
            message: "Error during event data loading",
            success: false,
        });
    }
}


// delete api operation
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.query;

        await Event.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Event deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error("error during event delete".error);
        return res.status(500).json({
            message: "Error during event delete",
            success: false,
        });
    }
};

// update api operation
const updateEvent = async (req, res) => {
    try {
        const { eventTitle, date, eventLink } = req.body;

        const { id } = req.query;

        const updateEvent = await Event.findByIdAndUpdate(
            id,
            {
                eventTitle,
                date,
                eventLink,
            },
            {
                new: true,
            }
        );

        return res.status(200).json({
            message: "Event deleted successfully",
            success: true,
            event: updateEvent,
        });
    } catch (error) {
        console.error("error during event update");
        return res.status(500).json({
            message: "Error during event delete",
            success: false,
        });
    }
};

export { createEvent, getEvent, deleteEvent, updateEvent };

