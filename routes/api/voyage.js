const express = require('express');
const Promise = require('bluebird');
const multer  =   require('multer');

const User = require("../../mongo/schemas/User");
const Debt = require("../../mongo/schemas/Debt");

const computedDebtRouter = new express.Router();

const storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
const upload = multer({ storage : storage}).single('userPhoto');


computedDebtRouter.post("/image", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
  console.log('toto')
});

module.exports = computedDebtRouter;
