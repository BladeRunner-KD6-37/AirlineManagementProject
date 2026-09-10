const { fetchPendingEmails, sendBasicEmail } = require('./email-service');

/**
 * Runs the reminder workflow: fetches pending tickets and sends reminder emails.
 * Updates each ticket's status based on the result.
 */
const runReminder = async () => {
  try {
    const pendingTickets = await fetchPendingEmails();
    console.log(`[Reminder Job] Checked pending tickets. Found: ${pendingTickets ? pendingTickets.length : 0}`);
    if (!Array.isArray(pendingTickets) || pendingTickets.length === 0) {
      return;
    }
    for (const ticket of pendingTickets) {
      try {
        console.log(`[Reminder Job] Sending email to ${ticket.recipientEmail} (Ticket ID: ${ticket.id})...`);
        await sendBasicEmail(ticket.recipientEmail, ticket.subject, ticket.content);
        await ticket.update({ status: 'SUCCESS' });
        console.log(`[Reminder Job] Successfully sent email and updated status to SUCCESS for ticket ID ${ticket.id}`);
      } catch (err) {
        await ticket.update({ status: 'FAILED' });
        console.error(`[Reminder Job] Failed to send reminder for ticket ID ${ticket.id}:`, err);
      }
    }
  } catch (error) {
    console.error('Error in reminder service:', error);
    throw error;
  }
};

module.exports = { runReminder };
