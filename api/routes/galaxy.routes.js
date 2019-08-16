const express = require('express')
const { getGalaxies, addGalaxy } = require('../controllers/galaxy.controller')

const router = express.Router()

/**
 * This function comment is parsed by doctrine
 * @route GET /galaxies
 * @group CRUD - Galaxy
 * @returns {object} 200 - An array of all galaxies info
 * @returns {Error}  403 - Forbidden request
 */
router.get('/galaxies', getGalaxies)

router.post('/galaxy/add', addGalaxy)

module.exports = router
