import { BannedUsers } from "../models/bannedUser.model.js";
import { User } from "../models/user.model.js";

const banUser = async (req, res) => {
    try {
        const banInfo = req.body;

        await BannedUsers.create(banInfo);

        const query = { _id: banInfo.userId.id };

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

        //    TODO: mail will be implemented

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

        const query = { _id: id.id };

        await User.findOneAndUpdate(
            query,
            {
                $set: {
                    banned: false,
                },
            },
            {
                new: true,
            }
        );

        await BannedUsers.deleteOne(query);

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

export { banUser, unBanUser };
