const jwt = require('jsonwebtoken')
const secretKey = 'crud example app'

module.exports = (req, res, next) => {
  const headerToken = req.headers.authorization
  if (!headerToken) {
    return res.status(401).send({ message: "No se ha suministrado un token" })
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    res.status(401).send({ message: "Token invalido" })
  }

  const token = headerToken.split(" ")[1]
  jwt.verify(token, secretKey, (err, user) => {
    if(err) {
      res.status(401).send({ message: 'No se pudo autorizar este request' })
    }else{
      next()
    }
  })
}