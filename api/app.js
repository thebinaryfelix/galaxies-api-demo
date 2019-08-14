// Import dependencies
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

// Mount server
const app = express()

// Configure environment
const PORT = process.env.PORT

mongoose.connect('mongodb://localhost:27017/galaxiesApi', {
  useNewUrlParser: true,
})

//  Connect all our routes to the application
app.use('/', routes)

app.listen(PORT, () => console.log(`Simple API listening on port: ${PORT}!`))
