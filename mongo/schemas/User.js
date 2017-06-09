const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const schema = new Schema({
  lastName: { type: String },
  firstName: { type: String },
  userName: { type: String },
});

module.exports = mongoose.model('User', schema);
