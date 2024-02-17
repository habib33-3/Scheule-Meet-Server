import { Event } from "../models/event.model.js";
import { Invite } from "../models/invite.model.js";
import { Meeting } from "../models/meeting.model.js";
import { User } from "../models/user.model.js";

const inviteUser = async (req, res) => {
    try {
        const inviteInfo = req.body;

        const invited = await User.findOne({
            email: inviteInfo.invitedEmail,
        });

        if (!invited) {
            return res.status(404).json({
                message: "User does not exits",
                success: false,
            });
        }

        // let invitedTo = "";

        // if (inviteInfo.type === "event") {
        //     invitedTo = await Event.findById(inviteInfo.eventId);
        // } else {
        //     invitedTo = await Meeting.findById(inviteInfo.eventId);
        // }

        const inviteData = {
            ...inviteInfo,
            // eventTitle: invitedTo.title,
        };

        await Invite.create(inviteData);

        return res.status(200).json({
            message: "User invited successfully",
            success: true,
        });
    } catch (error) {
        console.log("Error during invite user", error);
        res.status(500).json({
            message: "Error during invite user",
            success: false,
        });
    }
};

export { inviteUser };
