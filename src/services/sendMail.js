import transporter from "../config/nodemailer.config.js";

const sendMail = async (receiver, title, mailBody) => {
    try {
        const mailOptions = {
            from: {
                name: "Schedule Meet",
                address: process.env.MAIL_USER,
            },
            to: receiver, // list of receivers
            subject: title, // Subject line
            html: mailBody, // html body
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);
        return true;
    } catch (error) {
        console.log("error during mail send", error);
        return false;
    }
};

export default sendMail;
