const express = require('express');

const v1ApiRoutes =  require('./v1/index');

module.exports = (channel) => {
	const router = express.Router();
	router.use('/v1', v1ApiRoutes(channel));
	return router;
};