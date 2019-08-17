require('dotenv').config()
const mongoose = require('mongoose')
const debug = require('debug')('seeds:galaxy.seeds')
const Galaxy = require('../models/galaxy.model')
const documents = require('./galaxiesData')

const { DATABASE_URL } = process.env

const dropAndCreateCollection = data => {
  const userInput = String(data)
    .toLowerCase()
    .trim()

  if (userInput === 'y') {
    mongoose.connection.collections.galaxies.drop(dropError => {
      if (dropError) debug(dropError)
      Galaxy.insertMany(documents, async err => {
        if (err) debug(err)
        const galaxies = await Galaxy.find()
        process.stdout.write(`${galaxies.length} Documents were inserted\n`)
        mongoose.connection.close()
        process.exit()
      })
    })
  } else {
    process.stdout.write('Exit process\n')
    process.exit()
  }
}

const createCollection = data => {
  const userInput = String(data)
    .toLowerCase()
    .trim()

  if (userInput === 'y') {
    Galaxy.insertMany(documents, async err => {
      if (err) debug(err)
      const galaxies = await Galaxy.find()
      process.stdout.write(`${galaxies.length} Documents were inserted\n`)
      mongoose.connection.close()
      process.exit()
    })
  } else {
    process.stdout.write('Exit process\n')
    process.exit()
  }
}

const seedGalaxies = async () => {
  process.stdin.setEncoding('utf-8')
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
    })
    debug('Connected to mongo!')
    const galaxyCollection = await Galaxy.find()
    if (galaxyCollection.length) {
      process.stdout.write(
        'Collection already exists. Drop current collection to create a new one? [Y/n]',
      )
      process.stdin.on('data', dropAndCreateCollection)
    } else {
      process.stdout.write('Collection not found. Create new? [Y/n]')
      process.stdin.on('data', createCollection)
    }
  } catch (err) {
    debug(err)
  }
}

seedGalaxies()
