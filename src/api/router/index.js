//require modules
const userRouter = require('./userRouter')
const personRouter = require('./personRouter')
const vehicleRouter = require('./vehicleRouter')

let router = [userRouter, personRouter,vehicleRouter]

//export
module.exports = router