const mongoose = require('mongoose')
const Schema = mongoose.Schema

const galaxySchema = new Schema(
  {
    catalogue: {
      type: String,
      enum: ['Messier', 'NGC'],
      required: [true, 'Catalogue must be specified'],
    },
    code: { type: String, required: [true, 'Galaxy code is required'] },
    name: { type: String, required: [true, 'Galaxy name is required'] },
    size: { type: Number, default: 'Unknown' },
    type: { type: String, required: [true, 'Galaxy type is required'] },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

module.exports = mongoose.model('Galaxy', galaxySchema)
