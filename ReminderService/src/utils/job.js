const cron = require('node-cron');
const { runReminder } = require('../services/reminder-service');

/**
 * Sets up scheduled jobs for the ReminderService.
 * The cron expression can be configured via the REMINDER_CRON_EXPRESSION env var.
 * Defaults to running every 2 minutes.
 */
const setupJobs = () => {
  const cronExpression = process.env.REMINDER_CRON_EXPRESSION || '*/2 * * * *';
  cron.schedule(cronExpression, async () => {
    try {
      await runReminder();
    } catch (err) {
      console.error('Error executing reminder job:', err);
    }
  });
};

module.exports = setupJobs;