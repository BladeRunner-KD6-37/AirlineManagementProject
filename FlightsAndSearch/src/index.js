require('dotenv').config()
const express = require('express');
const { PORT } = require('./config/serverConfig')


 const setupAndStartServer =  async ()=>{

    const app = express();

    app.listen(PORT, ()=>{
        console.log(`Servr started at ${PORT}`);
        // console.log(process.env)
    })
 }

 setupAndStartServer();