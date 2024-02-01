import receiveMail from "../services/receiveMail.js";
import sendMail from "../services/sendMail.js";
import contactUsTemplate from "../templates/contactUs.template.js";
import meetingCreateTemplate from "../templates/meetingCreateConfirm.template.js";

const receiveContactUs = async (req, res) => {
    try {
        const { subject, name, email, message } = req.body;

        const mailBody = contactUsTemplate(name, email, message);

        console.log(req.body);

        const received = receiveMail(email, name, subject, mailBody);

        if (received) {
            return res.status(200).json({
                message: "Mail Received ",
                success: true,
            });
        } else {
            return res.status(400).json({
                message: "Mail didn't received",
                success: false,
            });
        }
    } catch (error) {
        console.log("error during receive contact us mail", error);
        return res.status(500).json({
            message: "Server error during receive contact us mail",
            success: false,
        });
    }
};

const sendMeetingCreateConfirmation = async (req, res) => {
    try {
        const { email, hostName, dateTime, meetingLink } = req.body;

        const mailBody = meetingCreateTemplate(hostName, dateTime, meetingLink);

        const sent = sendMail(
            email,
            "Your Meeting Created Successfully",
            mailBody
        );

        if (sent) {
            return res.status(200).json({
                message: "Mail Sent Successfully",
                success: true,
            });
        } else {
            return res.status(400).json({
                message: "Can't send Mail",
                success: false,
            });
        }
    } catch (error) {
        console.error(
            "Server Error during Meeting create confirmation email sent"
        );
        return res.status(500).json({
            message:
                "Server Error during Meeting create confirmation email sent",
            success: false,
        });
    }
};

export { receiveContactUs, sendMeetingCreateConfirmation };
