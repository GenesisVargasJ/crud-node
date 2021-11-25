//require modules
require('dotenv').config()

const compression = require('compression')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./api/router')

//constants
const app = express()

//middleware
app.use(compression())
app.use(morgan(app.get("env") === "production" ? "combined" : "dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//router
app.use('/api/v1/', router)

//setup
app.set("env", process.env.NODE_ENV || "development")
app.set("host", process.env.HOST || "0.0.0.0")
app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`)
})
