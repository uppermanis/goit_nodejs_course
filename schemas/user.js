const bCrypt = require("bcryptjs");
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  about: { type: String, default: 'Short story about me..' }
}, { versionKey: false, timestamps: true })


userSchema.methods.setPassword = function(password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function(password) {
  return bCrypt.compareSync(password, this.password);
};

module.exports = model('User', userSchema)