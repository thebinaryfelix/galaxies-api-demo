const express = require('express')

const router = express.Router()

// Import routes
const galaxyRoutes = require('./galaxy.routes')

router.use(galaxyRoutes)

module.exports = router
