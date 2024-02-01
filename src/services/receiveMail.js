import transporter from "../config/nodemailer.config.js";

const receiveMail = async (senderEmail, name, title, mailBody) => {
    try {
        const mailOptions = {
            from: {
                name: name,
                address: senderEmail,
            },
            to: process.env.MAIL_USER,
            subject: title,
            html: mailBody,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);

        return true;
    } catch (error) {
        console.log("error during mail send", error);
        return false;
    }
};

export default receiveMail;
