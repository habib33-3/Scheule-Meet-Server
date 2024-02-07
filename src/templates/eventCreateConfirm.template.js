const eventCreateTemplate = (hostName, dateTime, eventLink) => {
    return `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center;">Schedule Event</h1>
                <h2 style="color: #333333;">Event Created Successfully</h2>
                <p>Hello ${hostName},</p>
                <p>Your Event has been scheduled successfully.</p>
                <p><strong>Date:</strong> ${dateTime.date}</p>
                <p><strong>Time:</strong> ${dateTime.time}</p>
               
                <p>You can join the event by clicking the button below:</p>
                <a href="${eventLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Join Event</a>
                <p>If you have any questions or need further assistance, please feel free to contact us.</p>
                <p>Thank you,<br>Team Schedule Event</p>
            </div>
        </div>
    `;
};

export default eventCreateTemplate;
