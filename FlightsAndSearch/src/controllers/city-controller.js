const { CityService } = require('../services/index') ;
const cityService = new CityService();

const create = async (req,res)=>{

    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data :  city,
            success : true,
            message : "City created successfullly",
            err : {}
        })


        
    } catch (error) {
        console.log(error);     
        return res.status(500).json({
            success : false,
            message : "City could not be created",
            err : error
        })   
    }
}
//GET -> /city/:id -> id from req.params.id
const get = async (req,res)=>{

    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data :  response,
            success : true,
            message : "Successfully fetched the city",
            err : {}
        })
        
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            success : false,
            message : "Could not get the city",
            err : error
        })       
    }
}

// PATCH -> /city/:id --> req.body (with what u want to update)
const update = async (req,res)=>{

    try {
        const city = await cityService.updateCity(req.params.id, req.body); // don't need body parser here, because where we'll call these requests, we'll use bodyParser
        return res.status(201).json({
            data :  city,
            success : true,
            message : "City created successfullly",
            err : {}
        })
        
    } catch (error) {
        console.log(error);  
        return res.status(500).json({
            success : false,
            message : "Not able to update the City",
            err : error
        })         
    }
}
//DELETE request /city/:id -> id in request params
const destroy = async (req,res)=>{

    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data :  response,
            success : true,
            message : "City deleted successfullly",
            err : {}
        })
        
    } catch (error) {
        console.log(error);   
        return res.status(500).json({
            success : false,
            message : "Not able to delete the City",
            err : error
        })     
    }
}


module.exports = {
    create ,
    update,
    destroy,
    get
}