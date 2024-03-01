const eventInviteTemplate = (hostName, guestEmail, date, time, eventId) => {
    return `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center;">Event Invitation from Schedule Meet</h1>
                <h2 style="color: #333333;">You're Invited!</h2>
                <p>Hello ${guestEmail},</p>
                <p>You have been invited to an event hosted by ${hostName} scheduled for:</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
               
                <p>You can manage this invitation by clicking the button below:</p>
                <a href="https://schedulemeet-client.vercel.app/events/details/${eventId}" 
                style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Book Event</a>
                <p>Please note that you can accept or reject this invitation in your dashboard.</p>
                <p>If you have any questions or need further assistance, please feel free to contact us.</p>
                <p>Thank you,<br>Team Schedule Meet</p>
            </div>
        </div>
    `;
};

export default eventInviteTemplate;
