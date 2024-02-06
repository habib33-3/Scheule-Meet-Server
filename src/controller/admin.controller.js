import { User } from "../models/user.model.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            message: "User fetched",
            success: true,
            users,
        });
    } catch (error) {
        console.error("Server Error during getting all users from db", error);
        res.status(500).json({
            message: "Server Error during getting all users from db",
            success: false,
        });
    }
};

const makeAdmin = async (req, res) => {
    try {
        const id = req.params;

        const query = {
            _id: id.id,
        };

        const update = {
            $set: {
                role: "admin",
            },
        };

        await User.findOneAndUpdate(query, update, {
            new: true,
        });

        return res.status(200).json({
            message: "User role updated",
            success: true,
        });
    } catch (error) {
        console.log("Server error during make an user as admin", error);
        return res.status(500).json({
            message: "Server error during make an user as admin",
            success: false,
        });
    }
};

const checkAdmin = async (req, res) => {
    try {
        const { email } = req.params;

        console.log(email);

        const user = await User.findOne({ email: email });

        if (user?.role === "admin") {
            return res.status(200).json({
                message: "User is an admin",
                success: true,
                admin: true,
            });
        } else {
            return res.status(401).json({
                message: "User is not an admin",
                success: true,
                admin: false,
            });
        }
    } catch (error) {
        console.log("Server error during check admin", error);
        return res.status(500).json({
            message: "Server error during check admin",
            success: false,
        });
    }
};

export { getAllUsers, makeAdmin, checkAdmin };
