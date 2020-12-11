const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sender = process.env.SENDER_EMAIL;

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: sender,
    subject: 'Thanks for signing up!',
    text: `Hi, ${name}! Welcome to the app, let me know how you get along with it.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: sender,
    subject: 'Sorry to see you go!',
    text: `Hi, ${name}. We're sorry you're leaving, please let us know how to improve our service.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancellationEmail };
