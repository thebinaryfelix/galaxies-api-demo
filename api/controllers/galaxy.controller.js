const debug = require('debug')('app:galaxy.controller')
const Galaxy = require('../models/galaxy.model')

const getAllGalaxies = async (req, res) => {
  try {
    const galaxies = await Galaxy.find()
    res.status(200).json(galaxies)
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Error getting galaxies.' })
  }
}

const addGalaxy = async (req, res) => {
  try {
    const { catalog, code, name, type, size } = req.body
    const newGalaxy = new Galaxy({ catalog, code, name, type, size })
    await newGalaxy.save()
    res.status(200).json(newGalaxy)
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Error saving new galaxy.' })
  }
}

const getGalaxyByCode = async (req, res) => {
  try {
    const { code } = req.params
    const galaxy = await Galaxy.findOne({ code })
    if (!galaxy) res.status(400).json({ message: 'Galaxy not found.' })
    res.status(200).json(galaxy)
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Galaxy not found.' })
  }
}

// Edit galaxy info

// Delete galaxy info

// Find galaxies matching query

module.exports = {
  getAllGalaxies,
  getGalaxyByCode,
  addGalaxy,
}
