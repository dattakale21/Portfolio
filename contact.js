
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#messa");

import config from './config';

function sendEmail() {
    const bodymessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${message.value}`
    Email.send({
        SecureToken: process.env.EMAILJS_SECURE_TOKEN,
        To: 'dattakale2008@gmail.com',
        From: email.value,
        Subject: subject.value,
        Body: bodymessage
    }).then(
        response => {
            if (response == "OK" || response?.status === "OK") {
                Swal.fire({
                    title: "Success",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            } else {
                console.log(response);
            }
        }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})
