require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index')

const { Airplane }  = require('./models/index');
const db = require('./models/index');
const sequelize = require('sequelize');


const setupAndStartServer = async () => {
    try {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/api', ApiRoutes);

        app.listen(PORT, async () => {
            console.log(`Server started at ${PORT}`);

            if(process.env.SYNC_DB === 'true'){
                db.sequelize.sync({alter : true})
            }

            // const airports =  await city.getAirports();

            // const newAirport = await Airport.findOne({
            //      where :{
            //          id : 5
            //      }
            // });
            // await city.addAirport(newAirport);
            // await city.addAirports({
            //     name : 'Jindal Vijaynagar airport'
            // })
            // console.log(city,airports)

        });
        
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

setupAndStartServer();  