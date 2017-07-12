const mongoose = require("mongoose");
const Promise = require("bluebird");

const Debt = require("./Debt");
const Schema = mongoose.Schema;
const helpers = require("./helpers");

const updateOrCreateDebt = (f, t, calculedAmount) => {
  return Debt.findOne({ from: f, to: t }).then(d => {
    if (d) {
      const newAmount = d.amount + calculedAmount;
      return d.update({ amount: newAmount });
    } else {
      return Debt.create({ from: f, to: t, amount: calculedAmount });
    }
  });
};
const getOrCreateDebtLine = (from, to, amount) => {
  return Debt.findOne({ from: from._id, to: to._id }).then(debt => {
    if (debt) {
      const newAmount = debt.amount + amount;
      return debt.update({ amount: newAmount });
    } else {
      return Debt.create({ from, to, amount }).then(debt => (
        debt
      ));
    }
  });
};

const schema = new Schema({
  amount: { type: Number },
  from: { type: Schema.Types.ObjectId, ref: "User" },
  to: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

schema.post("save", function(line, next) {
  const userDebts = line.to.filter(u => u._id !== line.from._id);
  const amount = line.amount / line.to.length;
  Promise.mapSeries(userDebts, (user) => (
    getOrCreateDebtLine(line.from, user, amount)
  )).then(() => {
      next();
  }) 
});

schema.post("save", function(line, next) {
  const userDebts = line.to.filter(u => u._id !== line.from._id);
  const amount = -(line.amount / line.to.length);
  Promise.mapSeries(userDebts, (user) => (
    getOrCreateDebtLine(user, line.from, amount)
  )).then(() => {
    next();
  }) 
});

module.exports = mongoose.model("Line", schema);
