import { Meeting } from "../models/meeting.model.js";

const createMeeting = async (req, res) => {
    try {
        const meeting = req.body;

        await Meeting.create(meeting);

        return res.status(200).json({
            message: "Meeting created successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error during meeting create", error);
        res.status(500).json({
            message: "Error during meeting create",
            success: false,
        });
    }
};

const deleteMeeting = async (req, res) => {
    try {
        const { id } = req.query;

        await Meeting.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Meeting deleted successfully",
            success: true,
        });
    } catch (error) {
        console.log("error during meeting delete".error);
        res.status(500).json({
            message: "Error during meeting delete",
            success: false,
        });
    }
};

export { createMeeting, deleteMeeting };
