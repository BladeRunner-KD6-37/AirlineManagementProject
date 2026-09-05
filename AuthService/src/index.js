const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes =  require('./routes/index')
const app = express();

const prepareAndStartServer =  ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);
        try {
            app.listen(PORT, ()=>{
            console.log(`Server Started on PORT : ${PORT}`);
        });
        } catch (error) {
            console.log(`Something went wrong, server not started`);
            throw error;
        }
}

prepareAndStartServer();