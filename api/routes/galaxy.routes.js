const express = require('express')
const { getAllGalaxies, getGalaxyByCode, addGalaxy } = require('../controllers/galaxy.controller')

const router = express.Router()

/**
 * @route GET /galaxies/all
 * @group Galaxies - Operations involving all documents
 * @returns {Array.<Galaxy>} 200 - An array of all galaxies
 * @returns {Error.model}  400 - Bad request
 */
router.get('/galaxies/all', getAllGalaxies)

/**
 * @route POST /galaxies
 * @group Galaxies - Operations involving all documents
 * @param {Galaxy.model} galaxy.body.required - Galaxy object
 * @returns {Galaxy.model} 200 - The galaxy saved
 * @returns {Error.model}  400 - Bad request
 */
router.post('/galaxies', addGalaxy)

/**
 * @route GET /galaxy/{code}
 * @group Galaxy - Operations involving a single document
 * @param {string} code.path.required - Unique code (lowercase) that defines that galaxy in a specific catalogue - eg: m31
 * @returns {Galaxy.model} 200 - A single galaxy
 * @returns {Error.model}  400 - Bad request
 */
router.get('/galaxy/:code', getGalaxyByCode)

module.exports = router
