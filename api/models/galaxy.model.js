const mongoose = require('mongoose')
const Schema = mongoose.Schema

const galaxySchema = new Schema(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: Number, required: true },
    catalogue: {
      type: String,
      enum: ['Messier', 'NGC'],
      required: true,
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
