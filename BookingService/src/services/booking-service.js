const axios =  require('axios');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const { BookingRepository } =  require('../repositories/index');
const { ServiceError } = require('../utils/errors');

class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async  createBooking(data){
        
        try {
            const flightId = data.flightId;
            let getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}` ;
            const response  = await axios.get(getFlightRequestURL) ; // makes a http request to the flightAndSearch server for flight details
            // console.log("FROM BOOKING SERVICES", flight);
            // return flight.data.data ;
            let flightData = response.data.data; // actual flight data
            let priceOfTheFlight = flightData.price;
            if(data.noOfSeats > flightData.noOfSeats){
                throw new ServiceError('Something went wrong in the booking process', 'Insufficient Seats');
            }
            const totalCost = priceOfTheFlight * data.noOfSeats;
            const bookingPayload = { ...data, totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            return booking;
            

        } catch (error) {
            if(error.name == 'RepositoryError' || error.name == 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }

    }

}


module.exports = BookingService