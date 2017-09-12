const mongoose = require('mongoose');
const Debt = require('./Debt');
const Schema = mongoose.Schema;


const schema = new Schema({
  name: { type: String },
  country: { type: String },
  description:  { type: String },
  active: { type: Boolean, default: false },
  published: { type: Boolean, default: false },
})
.post('update', function(next) {
  console.log('%s has been saved', this.doc._id);
});

module.exports = mongoose.model('Voyage', schema);
