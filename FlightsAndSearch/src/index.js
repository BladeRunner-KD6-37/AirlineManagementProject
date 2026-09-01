require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index')

const setupAndStartServer = async () => {
    try {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/api', ApiRoutes);

        app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

setupAndStartServer();  