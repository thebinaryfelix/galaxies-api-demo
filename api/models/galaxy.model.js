const mongoose = require('mongoose')

const { Schema } = mongoose

/**
 * @typedef Galaxy
 * @property {enum} catalogue.required - specify which catalogue it is - eg: messier, ngc
 * @property {string} code.required - Galaxy code on the catalogue
 * @property {string} name.required - Popular name
 * @property {integer} size.required - Diameter in Light Years - eg: 100000
 * @property {enum} type.required - Galaxy structure type - eg: elliptical, spiral, irregular
 */

const galaxySchema = new Schema(
  {
    catalogue: {
      type: String,
      enum: ['Messier', 'NGC'],
      required: [true, 'Catalogue must be specified'],
    },
    code: { type: String, required: [true, 'Galaxy code is required'] },
    name: { type: String, required: [true, 'Galaxy name is required'] },
    size: { type: Number, required: [true, 'The galaxy must have a size'] },
    type: {
      type: String,
      enum: ['elliptical', 'spiral', 'irregular'],
      required: [true, 'Galaxy type is required'],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

module.exports = mongoose.model('Galaxy', galaxySchema)
