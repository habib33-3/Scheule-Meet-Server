import jwt from "jsonwebtoken";
import { BannedUsers } from "../models/bannedUser.model.js";

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        console.log(req.cookies);
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: token is missing",
                success: false,
            });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: "Forbidden: Invalid token",
                    success: false,
                });
            }

            req.user = decoded;

            const query = { userEmail: req.user?.email };

            const banned = await BannedUsers.findOne(query);

            if (banned) {
                return res.status(403).json({
                    message: "Forbidden: User is banned",
                    success: false,
                });
            }
            next();
        });
    } catch (error) {
        console.error("Error during verifying token", error);
        return res.status(500).json({
            message: "Internal Server Error: Token verification failed",
            success: false,
        });
    }
};

export default verifyToken;
