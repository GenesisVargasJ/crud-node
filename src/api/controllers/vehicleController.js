const database = require('./../../config/database')
const personQueries = require('./../../config/constants/queries/person')
const vehicleQueries = require('./../../config/constants/queries/vehicle')
const messages = require('./../../config/constants/messages')

module.exports = class VehicleController {

  /* GET */

  //get the id and put it in req
  static getId(req, res, next) {
    const { id } = req.params
    database.result(personQueries.GET_ID, [id])
      .then(result => {
        if (result.rowCount <= 0) {
          res.status(404).send({ message: messages.DATA_NOT_EXIST })
        }else{
          req.personId = id
          next()
        }
      })
      .catch(({ message }) => res.status(500).send({ message }))
  }

  //get all vehicles of a one person
  static get(req, res) {
    database.any(vehicleQueries.GET_ALL, [req.personId])
      .then(vehicles => res.status(200).send({ vehicles }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  //get all types
  static getTypes(req, res) {
    database.any(vehicleQueries.GET_TYPES)
      .then(types => res.status(200).send({ types }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  //get all brands
  static getBrands(req, res) {
    database.any(vehicleQueries.GET_BRANDS)
      .then(brands => res.status(200).send({ brands }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  /* CREATE */

  //create one vehicle
  static create(req, res) {
    const { id_person, id_vehicle_type, id_vehicle_brand, model } = req.body
    if (id_person == null || id_vehicle_type == null || id_vehicle_brand == null || model == null) {
      res.status(400).send({ message: messages.DATA_INCOMPLETE })
    }else{
      database.one(vehicleQueries.POST_CREATE, [id_person, id_vehicle_type, id_vehicle_brand, model, req.headers.userid])
        .then(vehicle => res.status(201).send({ vehicle }))
        .catch(({ message }) => res.status(500).send({ message }))
    }
  }  
}