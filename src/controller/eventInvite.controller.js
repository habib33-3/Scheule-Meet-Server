import { Event } from "../models/event.model.js";
import eventInviteTemplate from "../templates/eventInvite.template.js";
import sendMail from "../services/sendMail.js";

const inviteToEvent = async (req, res) => {
    try {
        const { hostName, guestEmail, date, time, eventId, title } = req.body;

        const mailBody = eventInviteTemplate(
            hostName,
            guestEmail,
            date,
            time,
            eventId
        );

        await sendMail(
            guestEmail,
            `You have been invited to ${title}`,
            mailBody
        );

        res.status(200).json({
            message: "Invitation Sent",
            success: true,
        });
    } catch (error) {
        console.log("error during invite to invite", error);
        res.status(500).json({
            message: "error during invite to invite",
            success: false,
        });
    }
};

export { inviteToEvent };
