import { Info } from "../models/info.model.js";

// post the data
const createInfo = async (req, res) => {
    try {
        const event = req.body;

        await Info.create(event);

        return res.status(200).json({
            message: "INFO created successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error during INFO create", error);
        res.status(500).json({
            message: "Error during info create",
            success: false,
        });
    }
};

// get the data

const getInfo = async (req, res) => {
    try {
        const result = await Info.find();

        res.send({ result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error during getting blogs from db",
            success: false,
        });
    }
};
//  delete the data 
const deleteInfo = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you are passing the ID as a parameter in the URL

        const deletedInfo = await Info.findByIdAndDelete(id);

        if (!deletedInfo) {
            return res.status(404).json({
                message: "INFO not found",
                success: false,
            });
        }

        res.status(200).json({
            message: "INFO deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error during INFO delete", error);
        res.status(500).json({
            message: "Error during INFO delete",
            success: false,
        });
    }
};

export { createInfo, getInfo , deleteInfo};
