const routes = require('express').Router()
const galaxyRoutes = require('./galaxy.routes')

routes.use('/', galaxyRoutes)

module.exports = routes
