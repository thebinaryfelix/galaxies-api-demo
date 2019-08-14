const routes = require('express').Router()
const GalaxyModel = require('../models/galaxy.model')

routes.get('/galaxies', async (req, res) => {
  try {
    const galaxies = await GalaxyModel.find()
    res.status(200).json(galaxies)
  } catch (err) {
    res.status(400).json({ message: 'Error getting galaxies' })
  }
})

routes.post('/galaxy/add', async (req, res) => {
  const { catalogue, code, name, type, size } = req.body

  try {
    const newGalaxy = new GalaxyModel({ catalogue, code, name, type, size })
    const savedGalaxy = await newGalaxy.save()
    res.status(200).json(savedGalaxy)
  } catch (err) {
    res.status(403).json({ message: 'Error saving new galaxy' })
  }
})

module.exports = routes
