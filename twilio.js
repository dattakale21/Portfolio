
const twilio = require('twilio');

const accountSid = 'ACba632a7a36eabb41ed23aad9896599f3';
const authToken = 'dce2301bbea0e7b84f42330a02817eef';

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

// Trigger this function when someone loads your website
// You can use an event listener or route in your web application to trigger it
sendMessage();
