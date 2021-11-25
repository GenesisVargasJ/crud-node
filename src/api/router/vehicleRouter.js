//require modules
const express = require('express')
const auth = require('../middlewares/auth')
const VehicleController = require('./../controllers/vehicleController')

const router = express.Router()

router
 .param('id', VehicleController.getId)

router
  .route('/vehicles/types')
  .get(auth, VehicleController.getTypes)

router
  .route('/vehicles/brands')
  .get(auth, VehicleController.getBrands)

router
  .route('/vehicles/person/:id')
  .get(auth, VehicleController.get)
  .post(auth, VehicleController.create)

//export
module.exports = router