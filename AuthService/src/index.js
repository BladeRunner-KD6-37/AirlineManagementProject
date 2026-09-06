const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes =  require('./routes/index')
const app = express();

// const userRepository = require('./repositories/user-repository');

const prepareAndStartServer =  async ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);
        try {
            app.listen(PORT, async()=>{
            console.log(`Server Started on PORT : ${PORT}`);

            const repository = new userRepository();
            // const response = await repository.getById(1)
            // console.log(response);
        });
        } catch (error) {
            console.log(`Something went wrong, server not started`);
            throw error;
        }
}

prepareAndStartServer();