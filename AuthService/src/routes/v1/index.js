const express = require('express');
const router = express.Router();

const UserController =  require('../../controllers/user-controller');
const  { AuthRequestValidator, IsAdminRequestValidator } =  require('../../middlewares/index');

router.post('/signup', 
    AuthRequestValidator.validateUserAuth,
    UserController.create);


router.post('/signIn',
    AuthRequestValidator.validateUserAuth,
    UserController.signIn );


router.get(
    '/isAuthenticated', 
    UserController.isAuthenticated);


router.get(
    '/isAdmin',
    IsAdminRequestValidator.validateIsAdminRequest,
    UserController.isAdmin);
module.exports =  router;