const jwt = require('jsonwebtoken');
const  UserRepository  = require('../repositories/user-repository');
const { JWT_KEY } = require('../config/serverConfig');
const { response } = require('express');


class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw error ;
        }
    }

    async destroy(userId){

        try {
            await this.userRepository.destroy(userId)
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY, {expiresIn : 30});
            return result;            
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        
        }
    }

    verifyToken(){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;            
        } catch (error) {
            console.log("Something went wrong in token validation", error)
            throw error;
        }

    }


}


module.exports = UserService;