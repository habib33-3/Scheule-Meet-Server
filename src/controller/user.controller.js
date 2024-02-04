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

// create jwt token after login or register
const createToken = async (req, res) => {
    try {
        const user = req.body;

        if (!user?.email) {
            return res.status(400).json({
                message: "Please provide email",
                success: false,
            });
        }

        const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: "24h",
        });
        return res
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production" ? "none" : "strict",
            })
            .send({
                message: "token created in cookies",
                success: true,
            })
            .status(200);
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

export { saveUserToDb, createToken, logOut };
