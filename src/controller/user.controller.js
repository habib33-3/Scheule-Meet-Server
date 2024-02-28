import { User } from "../models/user.model.js";
import { BannedUsers } from "../models/bannedUser.model.js";
import jwt from "jsonwebtoken";

// controller for save user to db
const saveUserToDb = async (req, res) => {
    try {
        const { email, name } = req.body;

        // Validate if the email is provided
        if (!email) {
            return res.status(400).json({
                message: "Please provide a valid email",
                success: false,
            });
        }

        // Check if the user is banned
        const isBanned = await BannedUsers.findOne({ userEmail: email });
        if (isBanned) {
            return res.status(400).json({
                message: "User is banned",
                success: false,
            });
        }

        // Check if the user already exists
        const isExists = await User.findOne({ email });
        if (isExists) {
            return res.status(200).json({
                message: "User already exists",
                success: true,
            });
        }

        // If 'name' is not provided, extract it from the email
        const parsedName = name || email.split("@")[0];

        // Create user object to save in the database
        const userInfo = {
            email,
            name: parsedName,
        };

        // Save the user to the database
        await User.create(userInfo);

        return res.status(200).json({
            message: "User saved to database",
            success: true,
        });
    } catch (error) {
        console.error("Server Error during saving user to db", error);
        return res.status(500).json({
            message: "Server Error during saving user to db",
            success: false,
        });
    }
};

// update user name and img
const updateUser = async (req, res) => {
    try {
        const { name, img, city, country } = req.body;
        const { id } = req.params;

        const updated = await User.findByIdAndUpdate(
            id,
            {
                $set: {
                    name,
                    img,

                    city,
                    country,
                },
            },
            {
                new: true,
            }
        );

        if (updated) {
            return res.status(200).json({
                message: "User info updated",
                success: true,
            });
        }

        return res.status(400).json({
            message: "User info updated failed",
            success: false,
        });
    } catch (error) {
        console.log("Server Error during updating user to db", error);
        res.status(500).json({
            message: "Server Error during updating user to db",
            success: false,
        });
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        const query = {
            email: email,
        };

        const user = await User.findOne(query);

        return res.status(200).json({
            message: "User fetched",
            success: true,
            user,
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
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
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

export {
    saveUserToDb,
    updateUser,
    createToken,
    logOut,
    getUser,
    getUserByEmail,
};
