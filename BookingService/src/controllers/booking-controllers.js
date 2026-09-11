const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services/index');

const { publishMessage } = require('../utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('../config/serverConfig');

const bookingService = new BookingService();
class BookingController {
    constructor(channel) {
        this.channel = channel;
        this.create = this.create.bind(this);
        this.sendMessageToQueue = this.sendMessageToQueue.bind(this);
    }

    async sendMessageToQueue(req, res) {
        const data = { message : "Success"}
        await publishMessage(this.channel, REMINDER_BINDING_KEY, JSON.stringify(data));
        return res.status(200).json({
            message : "successfully published the data"
        })
    }



    async create(req, res) {

        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                data: response,
                success: true,
                message: 'Successfully created a booking',
                err: {}
            })
        } catch (error) {

            return res.status(500).json({
                message: error.message,
                data: {},
                success: false,
                err: error.explanation
            })

        }
    }
}

module.exports = BookingController
