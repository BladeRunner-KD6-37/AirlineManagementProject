const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    PORT : process.env.PORT,
    SALT : Number.parseInt(process.env.SALT, 10) // need to pass an integer, otherwise it gets converted into a string.
}