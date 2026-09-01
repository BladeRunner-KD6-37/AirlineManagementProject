const { CityService } = require('../service/index');
const cityService = new CityService();

const create = async (req, res)=>{

    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success :  true,
            message : "Successfully created a city",
            err : { }

        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success :  false,
            message : "Not able to create a city",
            err : error
        })
        
    }
    
}
const get = (req, res)=>{
    
    try {
        
    } catch (error) {
        console.log(error)
        
    }

}
const update = (req, res)=>{

    try {
        
    } catch (error) {
        console.log(error)
        
    }

}
const destroy = (req, res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports = {
    create,
    destroy,
    get,
    update
}