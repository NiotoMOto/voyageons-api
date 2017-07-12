const mongoose = require('mongoose');
const Debt = require('./Debt');
const Schema = mongoose.Schema;


const schema = new Schema({
  lastName: { type: String },
  firstName: { type: String },
  userName: { type: String },
  group: { type: Schema.Types.ObjectId, ref: 'Group' } 
});

module.exports = mongoose.model('User', schema);
