const mongoose = require('mongoose');
const Debt = require('./Debt');
const Schema = mongoose.Schema;


const schema = new Schema({
  name: { type: String },
  country: { type: String },
  description:  { type: String },
});

module.exports = mongoose.model('Voyage', schema);
