const mongoose = require('mongoose')

const { Schema } = mongoose

/**
 * @typedef Galaxy
 * @property {enum} catalog.required - specify which catalog it is - eg: messier, ngc
 * @property {string} code.required - Galaxy code on the catalog - eg: m31
 * @property {string} name - Popular name - eg: andromeda
 * @property {integer} radius - Radius in Light Years - eg: 110000
 * @property {enum} type.required - Galaxy structure type - eg: spiral, elliptical, irregular, lenticular
 */

const galaxySchema = new Schema(
  {
    catalog: {
      type: String,
      enum: ['messier', 'ngc'],
      required: [true, 'Catalog must be specified'],
    },
    code: { type: String, required: [true, 'Galaxy code is required'] },
    name: String,
    radius: { type: Number, default: '' },
    type: {
      type: String,
      enum: ['elliptical', 'spiral', 'irregular', 'lenticular'],
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
