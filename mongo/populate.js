'strict mode';

const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash');
const Users = require('./schemas/user');

function populate(next) {
    Users.create({ nom: 'Guillemoto', prenom: 'Antoine', userName: 'userName' });
}

module.exports = populate;
