const express = require('express');
const { PORT, JWT_KEY } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes =  require('./routes/index')
const app = express();
const db = require('./models/index');
const {User, Role }= require('./models/index');
// const userRepository = require('./repositories/user-repository');
const UserService =  require('./services/user-service');

const prepareAndStartServer =  async ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);
        try {
            app.listen(PORT, async()=>{
            console.log(`Server Started on PORT : ${PORT}`);
            if(process.env.DB_SYNC){
                db.sequelize.sync({alter :  true})
            }

            // const u1 = await User.findByPk(4);
            // const r1 = await Role.findByPk(2);
            // // u1.addRole(r1); // sequelize handles it .
            // const response = r1.getUsers();
            // console.log(response)


            // const repository = new UserRepository();

           
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