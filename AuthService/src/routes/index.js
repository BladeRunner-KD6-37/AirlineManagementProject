const express = require('express');
const router =  express.Router();
const v1RoutesApi =  require('./v1/index');

router.use('/v1',v1RoutesApi);

module.exports =  router;