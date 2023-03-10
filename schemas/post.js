const mongoose = require('mongoose')

const { Schema, model } = mongoose

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { versionKey: false, timestamps: true })

module.exports = model('Post', postSchema)