import { BannedUsers } from "../models/bannedUser.model";
import { User } from "../models/user.model";


const banUser = async (req, res) => {
    try {
        const banInfo = req.body;

        const query = { _id: banInfo.userId.id };

        await BannedUsers.create(banInfo);

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

        //    Todo: mail will be implemented

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

export { banUser };
