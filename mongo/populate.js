'strict mode';

const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash');

const User = require('./schemas/User');
const Line = require('./schemas/Line');

function populate(next) {
  Promise.all([
    User.remove({}),
    Line.remove({}),
  ]).then(() => (
    Promise.all([ 
      User.create({ lastName: 'Guillemoto', firstName: 'Antoine', userName: 'Nioto' }),
      User.create({ lastName: 'Begain', firstName: 'Johan', userName: 'Arken' }),
      User.create({ lastName: 'Cirjean', firstName: 'Remy', userName: 'Arken' }),
    ])
  )).then(users => (
    Line.create({ amount: 155.66, from: users[0], to: users })
  )).then(line => {

  });
}

module.exports = populate;
