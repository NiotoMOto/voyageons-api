const express = require('express');
const Promise = require('bluebird');

const User = require("../../mongo/schemas/User");
const Debt = require("../../mongo/schemas/Debt");

const computedDebtRouter = new express.Router();

computedDebtRouter.get("/:user", (req, res) => {
  Promise.all([
    Debt.find({ from: req.params.user }).populate('to', 'from'),
    Debt.find({ to: req.params.user }).populate('to', 'from'),
  ])
  .then(([positiveDebts, negativeDebts]) => {
    res.json({positiveDebts, negativeDebts}); 
  })
});

module.exports = computedDebtRouter;
