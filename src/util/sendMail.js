import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

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
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
};

export default sendMail;
