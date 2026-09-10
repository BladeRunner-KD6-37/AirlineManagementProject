const express =  require('express');
const router = express.Router();
const { BookingController } = require('../../controllers/index'); 
// const { createChannel } = require('../../utils/messageQueue') ;

// const channel = await createChannel() // needs to be an async function to use await so we need to go one level up
const bookingController = new BookingController(channel) ;



router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMessageToQueue);
module.exports = router;