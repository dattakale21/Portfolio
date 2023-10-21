// Import 'dotenv' and configure it to load environment variables
require('dotenv').config();

// Now you can access environment variables like this
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// The rest of your server-side code remains the same
const client = twilio(accountSid, authToken);

// Function to send a message
function sendMessage() {
    client.messages
        .create({
            body: 'Your Portfolio has been accessed by someone.',
            from: '+12565790335',
            to: '+918767062808'
        })
        .then(message => console.log(`Message sent: ${message.sid}`))
        .catch(error => console.error(`Error sending message: ${error}`));
}

// Trigger this function when you want to send the message, for example, when a certain event occurs on your website.
sendMessage(); // You can call this function wherever needed in your client-side code.
