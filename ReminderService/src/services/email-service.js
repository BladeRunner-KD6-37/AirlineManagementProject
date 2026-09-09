const sender = require('../config/emailConfig');
const { TicketRepository } =  require('../repositories/index') ;


const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody)=>{
   try {
     const response = await sender.sendMail({
        from : mailFrom,
        to : mailTo,
        subject : mailSubject,
        text : mailBody
    }) ;
    console.log(response) ;
   } catch (error) {
    console.log(error);
    throw error ;
    
   }
}

const fetchPendingEmails = async(timestamp)=>{

    try {
        const response = await repo.getAll();
        return response
    } catch (error) {
        console.log(error);
    }

}

const createNotification = async (data)=>{
    try {
        const response = await repo.create(data);
        return response ;
    } catch (error) {
        console.log("Something went wrong in the service layer", error)
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
}