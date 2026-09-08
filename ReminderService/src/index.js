const express =  require('express');
const bodyParser = require('body-parser');
const  { sendBasicEmail } = require('./services/email-service');

const  { PORT }= require('./config/serverConfig')

const setupAndStartServer = async()=>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))
    
    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`); 
        sendBasicEmail(
            'support@admin.com',
            'ayushcantcode90@gmail.com',
            'This is a testing email',
            'Hey, how are you. I hope you like the support'
        )
    });
}
setupAndStartServer();