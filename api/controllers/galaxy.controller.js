const debug = require('debug')('app:galaxy.controller')
const Galaxy = require('../models/galaxy.model')

const getAllGalaxies = async (req, res) => {
  try {
    const galaxies = await Galaxy.find()
    res.status(200).json(galaxies)
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Error getting documents' })
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
    res.status(400).json({ message: 'Error saving new document' })
  }
}

const getGalaxyById = async (req, res) => {
  try {
    const { id } = req.params
    const galaxy = await Galaxy.findById({ _id: id })
    if (!galaxy) res.status(400).json({ message: 'Document not found' })
    res.status(200).json(galaxy)
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Error getting document' })
  }
}

const editGalaxy = async (req, res) => {
  try {
    const { id } = req.params
    const { catalog, code, name, type, size } = req.body
    await Galaxy.findByIdAndUpdate({ _id: id }, { catalog, code, name, type, size })
    res.status(200).json({ message: 'Document edited' })
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Error updating document' })
  }
}

const deleteGalaxy = async (req, res) => {
  try {
    const { id } = req.params
    await Galaxy.findByIdAndRemove({ _id: id })
    res.status(200).json({ message: 'Document deleted' })
  } catch (err) {
    debug(err)
    res.status(400).json({ message: 'Error deleting document' })
  }
}

module.exports = {
  getAllGalaxies,
  getGalaxyById,
  addGalaxy,
  editGalaxy,
  deleteGalaxy,
}
