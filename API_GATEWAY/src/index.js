const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const { PORT } = require('./config.js/serverConfig');
const axios = require('axios');


const limiter = rateLimit({ // rate limiter
    windowMs: 2 * 60 * 1000,
    max: 5,
});


const app = express();

app.use(morgan('combined'));
app.use(limiter);
app.use('/bookingservice',async (req, res, next) => {
    console.log(req.headers['x-access-token']);
    
    try {
        const response = await axios.get('http://localhost:3001/api/v1/isauthenticated',{
            headers : {
                'x-access-token' : req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if(response.data.success){
            next ();
        } else {
             return res.status(401).json({
            message : "Unauthorized"
        })
        }
        
    } catch (error) {
        return res.status(401).json({
            message : "Something went wrong"
        })
    }

})

app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

app.get('/home', (req, res) => {
    return res.json({
        message: 'Ok'
    });
});


app.listen(PORT, () => {
    console.log(`Sever listening on port ${PORT}`);
});
