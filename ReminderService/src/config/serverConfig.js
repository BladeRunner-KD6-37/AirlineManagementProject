const dotenv =  require('dotenv');
dotenv.config();

module.exports= {
    PORT :  process.env.PORT,
    EMAIL_ID : process.env.EMAIL_ID,
    EMAIL_PASSWORD :  process.env.EMAIL_PASS,
    EXCHANGE_NAME : process.env.EXCHANGE_NAME, 
    REMINDER_BINDING_KEY : process.env.REMINDER_BINDING_KEY,
    MESSAGE_BROKER_URL :  process.env.MESSAGE_BROKER_URL,
    SMTP_HOST : process.env.SMTP_HOST,
    SMTP_PORT : process.env.SMTP_PORT,
    REMINDER_CRON_EXPRESSION : process.env.REMINDER_CRON_EXPRESSION
}