// Import dependencies
const express = require('express')
const mongoose = require('mongoose')
const expressSwaggerGenerator = require('express-swagger-generator')

// Import project modules
const swaggerOptions = require('./config/swagger')
const routes = require('./routes')

// Configure environment
const PORT = process.env.PORT
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
  .then(() => console.log('Connected to mongo!'))
  .catch(err => console.error('Error connecting to mongo', err))

//  Connect all our routes to the application
app.use('/', routes)

app.listen(PORT, () => console.log(`Galaxies API listening on port: ${PORT}!`))
