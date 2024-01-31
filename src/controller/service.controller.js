import receiveMail from "../services/receiveMail.js";
import contactUsTemplate from "../templates/contactUs.template.js";

const receiveContactUs = async (req, res) => {
    try {
        const { title, name, senderEmail, message } = req.body;

        const mailBody = contactUsTemplate(name, senderEmail, message);

        const received = receiveMail(senderEmail, title, mailBody);

        if (received) {
            return res.send(200).json({
                message: "Mail Received ",
                success: true,
            });
        } else {
            return res.send(400).json({
                message: "Mail didn't received",
                success: false,
            });
        }
    } catch (error) {
        console.log("error during receive contact us mail", error);
        return res.send(500).json({
            message: "Server error during receive contact us mail",
            success: false,
        });
    }
};

export { receiveContactUs };
