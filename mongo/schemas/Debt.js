const mongoose = require('mongoose');
const helpers = require('./helpers');

const Schema = mongoose.Schema;


const schema = new Schema({
  amount: { type: Number },
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  to: { type: Schema.Types.ObjectId, ref: 'User' },
});

schema.index({ from: 1, to: 1 }, { unique: true });


module.exports = mongoose.model('Dept', schema);