import transporter from "../config/nodemailer.config";

const sendMail = async (receiver, title) => {
    try {
        const mailOptions = {
            from: {
                name: "Schedule Meet",
                address: process.env.MAIL_USER,
            },
            to: receiver, // list of receivers
            subject: title, // Subject line
            html: "<b>Hello world?</b>", // html body
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.log("error during mail send", error);
    }
};

export default sendMail;
