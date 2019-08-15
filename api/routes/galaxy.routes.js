const express = require('express')
const { getGalaxies, addGalaxy } = require('../controllers/galaxy.controller')

const router = express.Router()

router.get('/galaxies', getGalaxies)
router.post('/galaxy/add', addGalaxy)

module.exports = router
