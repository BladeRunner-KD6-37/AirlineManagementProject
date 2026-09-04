const express = require('express');
const router = express.Router();
const { FlightMiddlewares} =  require('../../middlewares/index')
const { FlightController, CityController, AirportController } = require( '../../controllers/index')

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);


router.post(
        '/flights',
        FlightMiddlewares.validateCreateFlight,
        FlightController.create
    );
router.get('/flights', FlightController.getAll);

router.post('/airports',AirportController.create);
module.exports = router;