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
        console.error("error during meeting delete".error);
        return res.status(500).json({
            message: "Error during meeting delete",
            success: false,
        });
    }
};

const updateMeeting = async (req, res) => {
    try {
        const { meetingTitle, date, meetingLink } = req.body;

        const { id } = req.query;

        const updateMeeting = await Meeting.findByIdAndUpdate(
            id,
            {
                meetingTitle,
                date,
                meetingLink,
            },
            {
                new: true,
            }
        );

        return res.status(200).json({
            message: "Meeting deleted successfully",
            success: true,
            meeting: updateMeeting,
        });
    } catch (error) {
        console.error("error during meeting update");
        return res.status(500).json({
            message: "Error during meeting delete",
            success: false,
        });
    }
};

export { createMeeting, deleteMeeting, updateMeeting };
