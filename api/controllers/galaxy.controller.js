const GalaxyModel = require('../models/galaxy.model')

const getAllGalaxies = async (req, res) => {
  try {
    const galaxies = await GalaxyModel.find()
    res.status(200).json(galaxies)
  } catch (err) {
    res.status(400).json({ message: 'Error getting galaxies.' })
  }
}

const addGalaxy = async (req, res) => {
  const { catalogue, code, name, type, size } = req.body

  try {
    const newGalaxy = new GalaxyModel({ catalogue, code, name, type, size })
    await newGalaxy.save()
    res.status(201).json({ message: 'A new galaxy was added to database.' })
  } catch (err) {
    res.status(400).json({ message: 'Error saving new galaxy.' })
  }
}

// Get single galaxy by code

// Edit galaxy info

// Delete galaxy info

// Find galaxies matching query

module.exports = {
  getAllGalaxies,
  addGalaxy,
}
