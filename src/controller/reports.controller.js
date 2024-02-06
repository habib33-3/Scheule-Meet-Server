import { Report } from "../models/reports.model";

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

        const query = { _id: id.id };

        await Report.deleteOne(query);

        res.status(200).json({
            message: "Report deleted",
            success: true,
        });
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

        res.status(200).json({
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

export { addReport, deleteReport, getReport, getReports };
