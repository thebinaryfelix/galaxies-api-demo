const express = require('express')
const { getAllGalaxies, addGalaxy } = require('../controllers/galaxy.controller')

const router = express.Router()

router.get('/galaxies/all', getAllGalaxies)
router.post('/galaxy/add', addGalaxy)

module.exports = router
