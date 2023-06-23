// i will require nodemailer

const nodemailer = require('nodemailer');
require("dotenv").config();

const email_config = require("../config/emailConfig");

const message_options = {
    to:['jonathan.mwaniki@thejitu.com', 'karani.wachira@thejitu.com'],
    from: process.env.EMAIL_USER,
    subject: 'My weekly report || sent from Karani Keith',
    text: 'Attached below of my training weekly report',
}

// function that picks the email configuration
const transporter = nodemailer.createTransport(email_config);

async function sendMail() {
    console.log(email_config)
try {
    let results = await transporter.sendMail(message_options)
} catch (error) {
    console.log(error)
    }
}


module.exports = sendMail;





