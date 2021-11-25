//require modules
const express = require('express')
const UserController = require('./../controllers/userController')

const router = express.Router()

router
  .route('/login')
  .post(UserController.login)

//export
module.exports = router