//require modules
const promise = require('bluebird')
const pgPromise = require('pg-promise')

//pg-promise initialization options
const options = {
  promiseLib: promise,
}

//constants
const pgp = pgPromise(options)
const cn = {
  host: process.env.NODE_APP_DATABASE_HOST,
  port: process.env.NODE_APP_DATABASE_PORT,
  database: process.env.NODE_APP_DATABASE_NAME,
  user: process.env.NODE_APP_DATABASE_USER,
  password: process.env.NODE_APP_DATABASE_PASWWORD,
}
const database = pgp(cn)

//export
module.exports = database