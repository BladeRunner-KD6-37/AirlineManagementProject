require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/serverConfig');
const {City} = require('./models/index')
const bodyParser = require('body-parser');
const CityRepository = require('./repositories/cityRepository')

 const setupAndStartServer =  async ()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :  true}))

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        // await City.create({
        //     name : "New delhi" // created a new entry in the table
        // })

        // console.log(process.env);

        const repo = new CityRepository();

        repo.createCity( { name : "Bangalore "}); // creates  new city in the cites table
    })
 }

 setupAndStartServer();  