const { FLights } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {


    #createFilter(data) { // private function 
        let filter = {};
        // let priceFilter = [];
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
         if(data.minPrice){
             Object.assign(filter, {price : {[Op.gte] : data.minPrice}}); 
            // priceFilter.push({price : {[Op.gte] : data.minPrice}});
         }

         if(data.maxPrice){
             Object.assign(filter, {price : {[Op.lte] : data.maxPrice}});
            // priceFilter.push({price : {[Op.lte] : data.maxPrice}});
         }
        // Object.assign(filter, {
        //     [Op.and]: [
        //         {
        //             price: { [Op.gte]: 7000 }
        //         },
        //         {
        //             price: { [Op.lte]: 10000 }
        //         }
        //     ]
        // })

        if(data.minPrice && data.maxPrice){
              Object.assign(filter, {
            [Op.and]: [
                {
                    price: { [Op.gte]: data.minPrice }
                },
                {
                    price: { [Op.lte]: data.maxPrice }
                }
            ]
        })
        } ;
        // return filter;
        return filter;
    }

    async createFlight(data) {

        try {
            const flight = await FLights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    // create the rest of the apis

    async getFlight(flightId) {
        try {
            const flight = await FLights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }

    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await FLights.findAll({
                where: filterObject
            });
            return flight; // all the flights and their data
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }

    }


}
module.exports = FlightRepository;

/*
where : {
arrivalAIrportId :  2,
departureAirportId : 4,
price : {[Op.gte] : 4000}   gte means greater than or equal to 

}
*/