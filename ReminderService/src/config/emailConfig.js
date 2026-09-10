const nodemailer = require('nodemailer');
const { EMAIL_ID, EMAIL_PASSWORD, SMTP_HOST, SMTP_PORT } = require('./serverConfig');

// If SMTP_HOST is defined, use it (e.g., MailHog); otherwise fall back to Gmail
const transportOptions = SMTP_HOST
  ? {
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT) || 1025,
      secure: false, // no TLS for local mock SMTP
    }
  : {
      service: 'Gmail',
      auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASSWORD,
      },
    };

const sender = nodemailer.createTransport(transportOptions);

module.exports = sender;