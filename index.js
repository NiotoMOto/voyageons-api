
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const errorhandler = require('errorhandler');


const apiRoutes = require('./routes/api');

const app = express();
const PORT = 4012;
const populateDatabase = require('./mongo/populate.js');

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  app.use(logger('dev'));
  app.use(errorhandler())
}

app.use(bodyParser.json());
app.use(methodOverride());

app.use(apiRoutes);

populateDatabase();

app.listen(PORT, function () {
  console.log(`Serveur mise en route sur le port ${PORT}`);
});
