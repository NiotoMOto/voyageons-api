'strict mode';

const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash');
const Users = require('./schemas/user');

function populate(next) {
    Users.remove({},  () => {
        Users.create({ lastName: 'Guillemoto', firstName: 'Antoine', userName: 'Nioto' });
        Users.create({ lastName: 'Begain', firstName: 'Johan', userName: 'Arken' });
        Users.create({ lastName: 'Cirjean', firstName: 'Remy', userName: 'Arken' });
    });
}

module.exports = populate;
