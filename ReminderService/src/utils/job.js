const cron = require('node-cron');
const { TicketService } =  require('../services/index')
 

/*
10 : am
every 5 minutes
we will check are there any pending emails which were expected to be sent 
by now and is pending
*/

const setupJobs =  ()=>{
    cron.schedule('*/2 * * * *', async ()=>{
        const response = await TicketService.fetchPendingEmails() ;
        console.log(response)
    })
}

module.exports = setupJobs;