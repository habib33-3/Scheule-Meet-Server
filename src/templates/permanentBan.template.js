const permanentBanUserTemplate = (username, reason) => {
    return `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center;">Permanent Ban from Schedule Meet</h1>
                <p>Hello ${username},</p>
                <p>We regret to inform you that you have been permanently banned from Schedule Meet.</p>
                <p><strong>Reason for Ban:</strong> ${reason}</p>
                <p>If you have any further questions , please contact our support team.</p>
                <p>Thank you for your understanding.</p>
                <p>Sincerely,<br>Team Schedule Meet</p>
            </div>
        </div>
    `;
};

export default permanentBanUserTemplate;
