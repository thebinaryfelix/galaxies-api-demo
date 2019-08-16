require('dotenv').config()

// Import dependencies
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressSwaggerGenerator = require('express-swagger-generator')
const debug = require('debug')('app:app.js')

// Import project modules
const swaggerOptions = require('./config/swagger')
const routes = require('./routes')

// Configure environment
const DATABASE_URL = process.env.DATABASE_URL

// Setup Express and Swagger
const app = express()
const expressSwagger = expressSwaggerGenerator(app)
expressSwagger(swaggerOptions)

// Establish connection with database
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => debug('Connected to mongo!'))
  .catch(err => debug(err))

app.use(morgan('dev'))

//  Connect all our routes to the application
app.use('/', routes)

module.exports = app
