const eventBookingConfirmationTemplate = (
    guestName,
    hostName,
    eventTitle,
    eventLink,
    date,
    time
) => {
    return `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center;">Booking Confirmation: ${eventTitle}</h1>
                <h2 style="color: #333333;">Dear ${guestName},</h2>
                <p>This is to confirm that you have successfully booked an event titled "${eventTitle}" hosted by ${hostName}.</p>
                <p>The event is scheduled for:</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p>You can access the event using the following link:</p>
                <a href="${eventLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Access Event</a>
                <p>Please make sure to mark your calendar and join the event on time.</p>
                <p>If you have any inquiries or require further assistance, feel free to reach out to us.</p>
                <p>Thank you for choosing our service!</p>
                <p>Best regards,<br> Schedule Meet</p>
            </div>
        </div>
    `;
};

export default eventBookingConfirmationTemplate;
