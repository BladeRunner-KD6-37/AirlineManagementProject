const { FlightService } = require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes')

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        let flightRequestData = {
            flightNumber :  req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime :  req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data : flight,
            success: true,
            message : "Successfully created a Flight",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            message : "Unable to create Flight",
            err : error
        });
        
    }
}

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data :  response,
            success : true,
            message: "Successfully fetched the flights ",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Couldn't fetch the flights",
            err : error
        })
        
        
    }
}

module.exports ={
    create,
    getAll

}