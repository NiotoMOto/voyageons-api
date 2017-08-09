const express = require('express');
const Promise = require('bluebird');

const User = require("../../mongo/schemas/User");
const Debt = require("../../mongo/schemas/Debt");

const computedDebtRouter = new express.Router();

computedDebtRouter.post("/", (req, res) => {
  console.log('toto')
});

module.exports = computedDebtRouter;
