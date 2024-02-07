import { Meeting } from "../models/meeting.model.js";

// post api operation
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

// get api operation
const getMeeting = async (req, res) => {
    try {
        const meetings = await Meeting.find();
        return res.status(200).json({
            message: "Meeting data loaded successfully",
            success: true,
            meetings,
        });
    } catch (error) {
        console.error("Error during meeting data loading", error);
        res.status(500).json({
            message: "Error during meeting data loading",
            success: false,
        });
    }
};

// delete api operation
const deleteMeeting = async (req, res) => {
    try {
        const { id } = req.params;

        const query = {
            _id: id.id,
        };

        await Meeting.deleteOne(query);

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

// update api operation
const updateMeeting = async (req, res) => {
    try {
        const { meetingTitle, date, meetingLink } = req.body;

        const { id } = req.params;

        const query = {
            _id: id.id,
        };

        const updatedInfo = {
            $set: {
                meetingTitle,
                date,
                meetingLink,
            },
        };

        await Meeting.findByIdAndUpdate(query, updatedInfo, { new: true });

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

export { createMeeting, getMeeting, deleteMeeting, updateMeeting };
