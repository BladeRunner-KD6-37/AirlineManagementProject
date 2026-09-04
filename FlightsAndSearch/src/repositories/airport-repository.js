const CrudRepository  = require('./crud-repository');
const  { Airport } = require('../models/index');
class AirportRepository extends CrudRepository { 
    constructor(){
        super(Airport); // gets all the functionality by going up the prototyple chain 
    }
}

module.exports = AirportRepository;