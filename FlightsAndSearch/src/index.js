require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const CityRepository = require( './repositories/cityRepository');
 const setupAndStartServer =  async ()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :  true}))

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();

        // repo.createCity ( { // to create a city in cities table
        //     name : "New Delhi"
        // });
        
        // console.log(process.env);
        // repo.deleteCity( 4 ) ;


     
    })
 }

 setupAndStartServer();  