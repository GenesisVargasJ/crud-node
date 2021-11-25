//require modules
const express = require('express')
const auth = require('../middlewares/auth')
const PersonController = require('./../controllers/personController')

const router = express.Router()

router
 .param('id', PersonController.getId)

router
  .route('/professions')
  .get(auth, PersonController.getProfessions)

router
  .route('/cities')
  .get(auth, PersonController.getCities)

router
  .route('/persons')
  .get(auth, PersonController.get)
  .post(auth, PersonController.create)

router
  .route('/persons/:id')
  .get(auth, PersonController.getOne)
  .put(auth, PersonController.update)
  .delete(auth, PersonController.delete)

//export
module.exports = router