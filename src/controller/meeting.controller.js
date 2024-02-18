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
const getMeetings = async (req, res) => {
    try {
        const { email } = req.params;

        const meetings = await Meeting.find({ hostEmail: email });
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
            _id: id,
        };

        console.log(query);

        const data = await Meeting.deleteOne(query);
        if (data.deletedCount) {
            console.log(data);
            return res.status(200).json({
                message: "Meeting deleted successfully",
                success: true,
            });
        }
    } catch (error) {
        console.error("error during meeting delete".error);
        return res.status(500).json({
            message: "Error during meeting delete",
            success: false,
        });
    }
};

// get single meeting
const getMeeting = async (req, res) => {
    try {
        const { id } = req.params;

        const meeting = await Meeting.findById(id);

        return res.status(200).json({
            message: "Meeting data loaded successfully",
            success: true,
            meeting,
        });
    } catch (error) {
        console.error("Error during single meeting data loading", error);
        res.status(500).json({
            message: "Error during single meeting data loading",
            success: false,
        });
    }
};

// update api operation
const updateMeeting = async (req, res) => {
    try {
        const { title, date, link } = req.body;

        const { id } = req.params;

        const query = {
            _id: id,
        };

        const updated = await Meeting.findByIdAndUpdate(
            query,
            {
                $set: {
                    title,
                    date,
                    link,
                },
            },
            {
                new: true,
            }
        );

        if (updated) {
            return res.status(200).json({
                message: "Meeting update successfully",
                success: true,
            });
        }

        return res.status(400).json({
            message: "Meeting update failed",
            success: false,
        });
    } catch (error) {
        console.error("error during meeting update");
        return res.status(500).json({
            message: "Error during meeting delete",
            success: false,
        });
    }
};

export { createMeeting, getMeetings, deleteMeeting, updateMeeting, getMeeting };
