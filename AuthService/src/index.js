const express = require('express');
const { PORT, JWT_KEY } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes =  require('./routes/index')
const app = express();

// const userRepository = require('./repositories/user-repository');
const UserService =  require('./services/user-service');

const prepareAndStartServer =  async ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);
        try {
            app.listen(PORT, async()=>{
            console.log(`Server Started on PORT : ${PORT}`);

            // const repository = new UserRepository();

            const service =  new UserService();
            const newToken = service.createToken({email : "Sanket@admin.com", id : 1});
            console.log(`New token is ${newToken}`);
        //     token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzg4Njk5OTEzLCJleHAiOjE3ODg3MDM1MTN9.qlYP3iB9ux6ehbwHOYbl8w2oPNUKgzcpgdXkXZqv5Bw"
        //    const response = service.verifyToken(token);
        //    console.log(response);

            // const response = await repository.getById(1)
            // console.log(response);
        });
        } catch (error) {
            console.log(`Something went wrong, server not started`);
            throw error;
        }
}

prepareAndStartServer();