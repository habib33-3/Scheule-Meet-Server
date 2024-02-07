import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// controller for save user to db
const saveUserToDb = async (req, res) => {
    try {
        const user = req.body;

        if (!user.email) {
            return res.status(400).json({
                message: " Please provide a valid email",
                success: false,
            });
        }

        const isExists = await User.findOne({ email: user.email });

        if (isExists) {
            return res.json({
                message: "User already exists",
                success: true,
            });
        }

        await User.create(user);

        return res.status(200).json({
            message: "User saved to database",
            success: true,
        });
    } catch (error) {
        console.error("Server Error during saving user to db", error);
        res.status(500).json({
            message: "Server Error during saving user to db",
            success: false,
        });
    }
};

// update user name and img
const updateUser = async (req, res) => {
    try {
        const { name, img } = req.body;
        const { id } = req.params;
        const query = { _id: id.id };

        const updatedInfo = {
            $set: {
                name,
                img,
            },
        };

        await User.findOneAndUpdate(query, updatedInfo, { new: true });

        return res.status(200).json({
            message: "User info updated",
            success: true,
        });
    } catch (error) {
        console.log("Server Error during updating user to db", error);
        res.status(500).json({
            message: "Server Error during updating user to db",
            success: false,
        });
    }
};

// create jwt token after login or register
const createToken = async (req, res) => {
    try {
        const user = req.body;

        const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: "10d",
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // expires in 10 days
        })
            .status(200)
            .send({
                message: "Token created and stored in cookies",
                success: true,
            });
    } catch (error) {
        console.error("Server Error during creating token", error);
        return res.status(500).json({
            message: "Server Error during creating token",
            success: false,
        });
    }
};

// logout function
const logOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            message: "Logged out successfully",
            success: true,
        });
    } catch (error) {
        console.error("Server Error during logout", error);
        return res.status(500).json({
            message: "Server Error during logout",
            success: false,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = User.findById(id);

        res.status(200).json({
            message: "User fetched successfully",
            success: true,
            user,
        });
    } catch (error) {
        console.error("Server Error during get single user", error);
        return res.status(500).json({
            message: "Server Error during get single user",
            success: false,
        });
    }
};

export { saveUserToDb, updateUser, createToken, logOut, getUser };
