const meetingCreateTemplate = (hostName, dateTime, meetingLink) => {
    return `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center;">Schedule Meet</h1>
                <h2 style="color: #333333;">Tour Meeting Created Successfully</h2>
                <p>Hello ${hostName},</p>
                <p>Your Meeting has been scheduled successfully.</p>
                <p><strong>Date:</strong> ${dateTime.date}</p>
                <p><strong>Date:</strong> ${dateTime.time}</p>
               
                <p>You can join the meet by clicking the button below:</p>
                <a href="${meetingLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Join Meet</a>
                <p>If you have any questions or need further assistance, please feel free to contact us.</p>
                <p>Thank you,<br>Team Schedule Meet</p>
            </div>
        </div>
    `;
};

export default meetingCreateTemplate;
