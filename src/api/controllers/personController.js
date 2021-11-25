const database = require('./../../config/database')
const personQueries = require('./../../config/constants/queries/person')
const messages = require('./../../config/constants/messages')

module.exports = class PersonController {

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

  //get one person
  static getOne(req, res) {
    database.one(personQueries.GET_ONE, [req.personId])
      .then(person => res.status(200).send({ person }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  //get all persons
  static get(req, res) {
    database.any(personQueries.GET_ALL)
      .then(persons => res.status(200).send({ persons }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  //get all professions
  static getProfessions(req, res) {
    database.any(personQueries.GET_PROFESSIONS)
      .then(professions => res.status(200).send({ professions }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  //get all cities
  static getCities(req, res) {
    database.any(personQueries.GET_CITIES)
      .then(cities => res.status(200).send({ cities }))
      .catch(({ message }) => res.status(500).send({ message }))
  }

  /* CREATE */

  //create one person
  static create(req, res) {
    const { name, lastname, identification, birth_date, gender, phone, address, id_profession, id_city } = req.body
    if (name == null || lastname == null || identification == null || birth_date == null || gender == null) {
      res.status(400).send({ message: messages.DATA_INCOMPLETE })
    }else{
      database.result(personQueries.GET_EXIST, [identification])
        .then(result => {
          if(result.rowCount > 0){
            res.status(409).send({ message: messages.DATA_EXIST })
          }else{
            database.one(personQueries.POST_CREATE, [name, lastname, identification, birth_date, gender, phone, address, id_profession, id_city, req.headers.userid])
              .then(person => res.status(201).send({ person }))
              .catch(({ message }) => res.status(500).send({ message }))
          }
        })
        .catch(({ message }) => res.status(500).send({ message }))
    }
  }  

  /* UPDATE */

  //update one person
  static update(req, res) {
    const { name, lastname, identification, birth_date, gender, phone, address, id_profession, id_city } = req.body
    if (name == null || lastname == null || identification == null || birth_date == null || gender == null) {
      res.status(400).send({ message: messages.DATA_INCOMPLETE })
    }else{
      database.none(personQueries.PUT_ONE, [name, lastname, identification, birth_date, gender, phone, address, id_profession, id_city, req.personId])
        .then(() => res.status(204).send())
        .catch(({ message }) => res.status(500).send({ message }))
    }
  } 

  /* DELETE */

  //delete one person
  static delete(req, res) {
    database.none(personQueries.DELETE_ONE, [req.personId])
      .then(() => res.status(204).send())
      .catch(({ message }) => res.status(500).send({ message }))
  }
}