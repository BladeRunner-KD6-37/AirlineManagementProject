const { Airplane } = require('../models/index')

class AirplaneRepository{

    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id); // get the airplane to get the data about number of seats
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };            
        }
    }
}


module.exports = AirplaneRepository;