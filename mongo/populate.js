'strict mode';

const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash');

const User = require('./schemas/User');
const Line = require('./schemas/Line');
const Debt = require('./schemas/Debt');
const Goup = require('./schemas/Group');

let saveedUsers = [];
function populate(next) {
  Promise.all([
    User.remove({}),
    Line.remove({}),
    Debt.remove({}),
  ]).then(() => (
    Goup.create({ name: 'goupe 1'})
  )).then(group => (
    Promise.all([ 
      User.create({ lastName: 'Guillemoto', firstName: 'Antoine', userName: 'Nioto', group }),
      User.create({ lastName: 'Begain', firstName: 'Johan', userName: 'Arken', group }),
      User.create({ lastName: 'Cirjean', firstName: 'Remy', userName: 'Arken', group }),
      User.create({ lastName: 'Fernandez', firstName: 'Sébastien', userName: 'Arken', group }),
    ])
  )).then(users => {
    saveedUsers = users;
    return Promise.all([ 
      Line.create({ amount: 66, from: users[0], to: users }),
      Line.create({ amount: 66, from: users[1], to: users }),
      Line.create({ amount: 66, from: users[2], to: users }),
      Line.create({ amount: 66, from: users[3], to: users }),
    ])
  }).then(line => (
    Promise.all([ 
      Line.create({ amount: 0, from: saveedUsers[2], to: saveedUsers }),
    ]) 
  ));
}

module.exports = populate;
