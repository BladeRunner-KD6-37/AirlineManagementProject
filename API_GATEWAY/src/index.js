const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit') ;
const { PORT } = require('./config.js/serverConfig') ;


const limiter =  rateLimit({ // rate limiter
    windowMs : 2 * 60 * 1000,
    max : 5,
})


const app = express();

app.use(morgan('combined')) ;
app.use(limiter)
app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin : true})) ;

app.get('/home', (req,res)=>{
    return res.json({
        message : 'Ok'
    })
})


app.listen(PORT,()=>{
        console.log(`Sever listening on port ${PORT}`) ;
    });
