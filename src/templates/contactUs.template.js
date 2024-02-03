const contactUsTemplate = (name, email, message) => {
    return `
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
};

export default contactUsTemplate;
