const { FLights } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository{


    #createFilter(data){ // private function 
        let filter = { };
        if(data.arrivalAirportId){
            filter.arrivalAirportId =  data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice){
            
        }
    }

    async createFlight(data){

        try {
            const flight = await FLights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error } ;
        }
    }

    // create the rest of the apis

    async getFlight(flightId){
        try {
            const flight = await FLights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error } ;
        }

    }
    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await FLights.findAll(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error } ;
        }

    }
    
      
}
module.exports = FlightRepository;