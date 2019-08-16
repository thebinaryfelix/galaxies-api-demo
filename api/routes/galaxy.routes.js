const express = require('express')
const { getAllGalaxies, getGalaxyByCode, addGalaxy } = require('../controllers/galaxy.controller')

const router = express.Router()

/**
 * @route GET /galaxies
 * @group CRUD - Galaxy
 * @returns {object} 200 - An array of all galaxies info
 * @returns {Error}  403 - Forbidden request
 */
router.get('/galaxies/all', getAllGalaxies)

router.get('/galaxy/:code', getGalaxyByCode)

router.post('/galaxy/add', addGalaxy)

module.exports = router
