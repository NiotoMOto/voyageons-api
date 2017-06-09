const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const schema = new Schema({
  amount: { type: Number },
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  to: { type: Schema.Types.ObjectId, ref: 'User' },

});

module.exports = mongoose.model('Dept', schema);