const getOrCreateDebtLine = (from, to, amount) => {
  const Debt = require("../Debt");
  const Promise = require("bluebird");

  const updateOrCreateDebt = (f, t, calculedAmount) => {
    return Debt.findOne({ from: f, to: t }).then(d => {
      if (d) {
        const newAmount =  d.amount + calculedAmount
        return d.update({ amount: newAmount });
      } else {
        return Debt.create({ from: f, to: t, amount: calculedAmount });
      }
    });
  };

  return Debt.findOne({ from, to }).then(debt => {
    if (debt) {
        const newAmount =  debt.amount + amount;
      return debt.update({ amount: newAmount })
        .then(() => (updateOrCreateDebt(to, from, -amount)));
    } else {
      return Debt.create({ from, to, amount })
        .then(() => (updateOrCreateDebt(to, from, -amount)));
    }
  });
};

exports.getOrCreateDebtLine = getOrCreateDebtLine;
