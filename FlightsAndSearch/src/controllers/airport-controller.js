const { AirportService } =  require('../services/index');
const airportService = new AirportService();


const create = async (req,res)=>{

    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data :  response,
            success : true,
            message : "sucessfully created a new airport",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            err : error,
            message : 'Unable to create a new Airport'
        })
        
    }
}

module.exports = {
    create
}