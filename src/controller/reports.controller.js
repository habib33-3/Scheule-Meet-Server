import { BannedUsers } from "../models/bannedUser.model.js";
import { Report } from "../models/reports.model.js";
import { User } from "../models/user.model.js";

const addReport = async (req, res) => {
    try {
        const reportInfo = req.body;

        await Report.create(reportInfo);

        res.status(200).json({
            message: "Report added",
            success: true,
        });
    } catch (error) {
        console.error("Server error during add report", error);
        res.status(500).json({
            message: "Server error during add report",
            success: false,
        });
    }
};

const deleteReport = async (req, res) => {
    try {
        const { id } = req.params;

        const query = { _id: id };

        const result = await Report.deleteOne(query);

        if (result.deletedCount) {
            return res.status(200).json({
                message: "Report deleted",
                success: true,
            });
        }
    } catch (error) {
        console.error("Server error during delete report", error);
        res.status(500).json({
            message: "Server error during delete report",
            success: false,
        });
    }
};

const getReports = async (req, res) => {
    try {
        const reports = await Report.find();

        return res.status(200).json({
            message: "Reports fetched",
            success: true,
            reports,
        });
    } catch (error) {
        console.error("Server error during get Reports", error);
        res.status(500).json({
            message: "Server error during get Reports",
            success: false,
        });
    }
};

const getReport = async (req, res) => {
    try {
        const { id } = req.params;

        const report = await Report.findById(id);

        res.status(200).json({
            message: "Report fetched",
            success: true,
            report,
        });
    } catch (error) {
        console.error("Server error during get single Report", error);
        res.status(500).json({
            message: "Server error during get single Report",
            success: false,
        });
    }
};

const acceptReport = async (req, res) => {
    try {
        const { userId, reportedTo, bannedBy, reason, bannedFrom } = req.body;

        const query = { _id: userId };
        const { id } = req.params;

        // update the users banned value to true
        await User.findOneAndUpdate(
            query,
            {
                $set: {
                    banned: true,
                },
            },
            {
                new: true,
            }
        );

        const banInfo = {
            userId: userId,
            userEmail: reportedTo,
            bannedBy,
            reason,
            bannedFrom,
        };

        // added the banned user to bannedUsers
        await BannedUsers.create(banInfo);

        //  delete the accepted report
        await Report.deleteOne({ _id: id });

        res.status(200).json({
            message: "Report accepted",
            success: true,
        });
    } catch (error) {
        console.log("Server error during Accept Report", error);
        res.status(500).json({
            message: "Server error during Accept Report",
            success: false,
        });
    }
};

export { addReport, deleteReport, getReport, getReports, acceptReport };
