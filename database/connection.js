const mongoose = require('mongoose');

const uri = process.env.DB_HOST

function getConnection() {
  return mongoose.connect(uri)
}

module.exports = getConnection;