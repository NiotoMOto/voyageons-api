const requireDir = require('require-dir');
const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/database');
module.exports = requireDir('./schemas');
