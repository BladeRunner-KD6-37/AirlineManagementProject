const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const  { PORT,  DB_SYNC } =  require('./config/serverConfig');
const db= require('./models/index');
const apiRoutes = require('./routes/index');
const { createChannel } = require('./utils/messageQueue');

const setupAndStartServer = async()=>{
    const channel = await createChannel();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}));
    app.get('/api/v1/home',(req,res)=>{
        return res.json({
            message  : "Hitting the Booking service"
        });
    } )
    app.use('/api', apiRoutes(channel));

    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`);
        if(DB_SYNC){
            db.sequelize.sync({alter : true}) ;
        } ;
        
    }) ;
}

setupAndStartServer();