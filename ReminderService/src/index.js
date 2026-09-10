const express =  require('express');
const bodyParser = require('body-parser');
// const  { sendBasicEmail } = require('./services/email-service');
const { createChannel } = require('./utils/messageQueue') ;
const apiRoutes = require('./routes/index')

const  { PORT }= require('./config/serverConfig')
const cron =  require('node-cron');

const jobs =  require('./utils/job');

const setupAndStartServer = async()=>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', apiRoutes);

    const channel = await createChannel() ;
    
    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`); 
        // sendBasicEmail(
        //     'support@admin.com',
        //     'ayushcantcode90@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you. I hope you like the support'
        // )

        jobs();
    });
}
setupAndStartServer();