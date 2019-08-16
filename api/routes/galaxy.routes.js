const express = require('express')
const { getAllGalaxies, getGalaxyByCode, addGalaxy } = require('../controllers/galaxy.controller')

const router = express.Router()

/**
 * @route GET /galaxies/all
 * @group Galaxies
 * @returns {Array.<Galaxy>} 200 - An array of all galaxies
 * @returns {Error.model}  403 - Forbidden
 */
router.get('/galaxies/all', getAllGalaxies)

/**
 * @route POST /galaxies
 * @group Galaxies
 * @param {Galaxy.model} galaxy.body.required - Galaxy object
 * @returns {Galaxy.model} 200 - The galaxy saved
 * @returns {Error.model}  403 - Forbidden
 */
router.post('/galaxies', addGalaxy)

router.get('/galaxy/:code', getGalaxyByCode)

module.exports = router
