const database = require('./../../config/database')
const userQueries = require('./../../config/constants/queries/user')
const messages = require('./../../config/constants/messages')
const jwt = require('jsonwebtoken')
const secretKey = 'crud example app'

module.exports = class UserController {

  /* GET */

  //login one user
  static login(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).send({ message: messages.DATA_INCOMPLETE })
    }else{
      database.result(userQueries.POST_LOGIN, [email, password])
        .then(result => {
          if(result.rowCount > 0){
            let tokenData = { username: email }
            let token = jwt.sign(tokenData, secretKey, { expiresIn: 60 * 60 * 96 })
            res.status(200).send({ id: result.rows[0].id, token: token })
          }else{
            res.status(401).send({ message: messages.LOGIN_FAILED })
          }
        })
        .catch(({ message }) => res.status(500).send({ message }))
    }
  }
}