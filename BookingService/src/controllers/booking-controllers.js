const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services/index');


const bookingService = new BookingService();

const create = async (req, res) => {

    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : 'Successfully created a booking',
            err : { }
        })
    } catch (error) {

        return res.status(500).json({
            message : error.message,
            data: {},
            success : false,
            err  : error.explanation
        })

    }
}

module.exports = {
    create
}