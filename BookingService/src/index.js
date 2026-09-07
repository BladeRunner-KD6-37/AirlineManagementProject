const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const  { PORT, DB_SYNC } =  require('./config/serverConfig');
const db= require('./models/index');
const apiRoutes = require('./routes/index');

const setupAndStartServer = async()=>{

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api',apiRoutes);

    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`);
        if(DB_SYNC){
            db.sequelize.sync({alter : true}) ;
        } ;
    }) ;
}

setupAndStartServer();