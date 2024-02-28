import { BannedUsers } from "../models/bannedUser.model.js";
import { User } from "../models/user.model.js";
import banUserTemplate from "../templates/banUser.template.js";

const banUser = async (req, res) => {
    try {
        const banInfo = req.body;

        const isExists = await BannedUsers.findOne({
            userEmail: banInfo.userEmail,
        });

        if (isExists) {
            return res.json({
                message: "User already banned",
                success: true,
            });
        }

        const added = await BannedUsers.create(banInfo);

        const query = { _id: banInfo.userId };

        const updated = await User.findOneAndUpdate(
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

//    console.log(updated)
   console.log(updated?.name)

        res.status(200).json({
            message: "User banned Successfully",
            success: true,
        });
    } catch (error) {
        console.error("Server error during ban user", error);
        res.status(500).json({
            message: "Server error during ban user",
            success: false,
        });
    }
};

const unBanUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { userId } = req.body;

        const deleteQuery = { _id: id };

        const updateQuery = { _id: userId };

        await User.findOneAndUpdate(
            updateQuery,
            {
                $set: {
                    banned: false,
                },
            },
            {
                new: true,
            }
        );

        await BannedUsers.deleteOne(deleteQuery);

        //    TODO: mail will be implemented

        res.status(200).json({
            message: "User unBanned Successfully",
            success: true,
        });
    } catch (error) {
        console.error("Server error during unBan user", error);
        res.status(500).json({
            message: "Server error during unBan user",
            success: false,
        });
    }
};

const getBanUsers = async (req, res) => {
    try {
        const banUsers = await BannedUsers.find();
        return res.status(200).json({
            message: "Users fetched",
            success: true,
            banUsers,
        });
    } catch (error) {
        console.error(
            "Server Error during getting all banned users from db",
            error
        );
        res.status(500).json({
            message: "Server Error during getting all banned users from db",
            success: false,
        });
    }
};

const banPermanent = async (req, res) => {
    try {
        const { userId, banId } = req.body;

        const updated = await BannedUsers.findByIdAndUpdate(
            banId,
            {
                $set: {
                    isPermanent: true,
                },
            },
            { new: true }
        );

        console.log(updated);
    } catch (error) {
        console.log("server error during ban permanently", error);
        res.status(500).json({
            message: "server error during ban permanently",
            success: false,
        });
    }
};

export { banUser, unBanUser, getBanUsers };
