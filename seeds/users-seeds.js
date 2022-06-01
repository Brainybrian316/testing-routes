const { User } = require('../models');

const userData = [
  {
    first_name: 'billy',
  },
  {
    first_name: 'bob',
  },
  {
    first_name: 'sally',
  },
  {
    first_name: 'mike',
  },
  {
    first_name: 'donna',
  },
  {
    first_name: 'willy',
  },
  {
    first_name: 'samm',
  },
  {
    first_name: 'poppy',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
