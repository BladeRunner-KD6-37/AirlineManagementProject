const jwt = require('jsonwebtoken');
const   UserRepository   = require('../repositories/user-repository');
const { JWT_KEY } = require('../config/serverConfig');
const { response } = require('express');
const bcrypt =  require('bcrypt');


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


    async signIn(email,plainPassword){

        try { // step 1 -> fetch the user using email
            const user = await this.userRepository.getByEmail(email);
            //step 2 -> compare the incoming password with the stored encrypted password
            const passwordMatch = await this.checkPassword(plainPassword, user.password) ;
            if(!passwordMatch){
                console.log("Password doesn't match");
                throw {  error : `Incorrect password`};
                 
            }

            //Step->3 if the password matches, we'll create a new token and send it to the user
            const newJWT = this.createToken({email : user.email, id : user.id});
            return newJWT;
            
        } catch (error) {
            console.log("Something went wrong in sign up process")
            throw error;
        }
    }

    async isAuthenticated (token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw { error : `Invalid token`} ;
            }
            const user = await this.userRepository.getById(response.id)
            if(!user){
                throw { error : `No user with the corresponding token`}
            }
            return user.id;
            
        } catch (error) {
            console.log("Something went wrong in the auth in process");
            throw error;
            
        }
    }


    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY, {expiresIn : '1h'});
            return result;            
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;            
        } catch (error) {
            console.log("Something went wrong in token validation", error)
            throw error;
        }

    }

    checkPassword(userInputPlainPassowrd, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassowrd, encryptedPassword) ;
        } catch (error) {
            console.log("Something went wrong in password comparison")
        }
    }

    
    isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log("Something went wrong check isAdmin");
            throw error;
        }
    }

}


module.exports = UserService;