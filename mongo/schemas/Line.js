const mongoose = require('mongoose');
const Debt = require('./Debt');
const Schema = mongoose.Schema;

const schema = new Schema({
  amount: { type: Number },
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  to: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

schema.post('save', (line) => {
  const userDebts = line.to.filter((u) => (
    u._id !== line.from._id
  ));
  userDebts.forEach(user => {
    Debt.create({from: line.from, to: user, amount: line.amount/line.to.length})
  });
  console.log(userDebts);
});

module.exports = mongoose.model('Line', schema);
