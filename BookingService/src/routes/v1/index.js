const express =  require('express');
const { BookingController } = require('../../controllers/index'); 

module.exports = (channel) => {
	const router = express.Router();
	const bookingController = new BookingController(channel);

    router.get('/info', (req,res)=>{
        return res.json({
            message  : 'Response from routes'
        });
    });
	router.post('/bookings', bookingController.create);
	router.post('/publish', bookingController.sendMessageToQueue);
	return router;
};