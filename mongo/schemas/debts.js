const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const schema = new Schema({
    amount: { type: Number }, 
});

module.exports = mongoose.model('Depts', schema);
