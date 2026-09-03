const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success: true,
            message : "Successfully created a Flight",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Unable to create Flight",
            err : error
        });
        
    }
}

module.exports ={
    create

}