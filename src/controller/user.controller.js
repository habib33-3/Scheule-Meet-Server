import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// controller for save user to db
const saveUserToDb = async (req, res) => {
    try {
        const user = req.body;

        const isExists = await User.findOne({ email: user.email });

        if (isExists) {
            res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }

        await User.create(user);

        res.status(200).json({
            message: "User saved to database",
            success: true,
        });
    } catch (error) {
        console.log(error);
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
        const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: "24h",
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        }).send({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error during creating token",
            success: false,
        });
    }
};

export { saveUserToDb, createToken };
