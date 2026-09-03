const { FlightRepository, AirplaneRepository } = require('../repositories/index');
const { compareTime } = require('../utils/helper')

class FlightService {
    constructor() {

        this.airplaneRepository = new AirplaneRepository(); // we'l be using it multiple times in different services 
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw { error : 'Arrival Time cannot be less than departure time'} ;                
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId); // get the Airplane
            const flight = await this.flightRepository.createFlight({  // fetch the plane and then add the capacity there
                ...data,
                 totalSeats: airplane.capacity
             })
            return flight; 

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };

        }
    }

    async getFlightData() {
        // todo
        try {

        } catch (error) {

        }
    }
}

module.exports = FlightService;

// what do we send in the data object : 
/*
{
flightNumber,
airplaneId,
departureAirportId,
arrivalAirportId,
arrivalTime, 
departureTime,
price,
totalSeats -> fetch it froma airplane
}
*/