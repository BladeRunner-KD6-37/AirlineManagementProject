const { TicketService } =  require('../services/index');

const create =  async (req,res)=>{
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            success : true, 
            message : "Successfully registered an email reminder",
            err : {}
        });

    } catch (error) {
         return res.status(500).json({
            data: {},
            success : false, 
            message : "Failed to register the email reminder",
            err : error
        });
    }
}

module.exports ={
    create
}