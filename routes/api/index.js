const mongoose = require('mongoose');
const express = require('express');
const restify = require('express-restify-mongoose');

const models = require('../../mongo/')
const computedDebts = require('./computedDebt');

const router = express.Router();



//serve all plubic mongod schemas
for (var model in mongoose.models) {
  restify.serve(router, mongoose.models[model]);
}

router.use('/api/v1/computed/debt', computedDebts);

module.exports = router;
