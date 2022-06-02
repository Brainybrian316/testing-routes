const { User } = require('../models');

const userData = [
  {
    first_name: 'billy',
    candy_box: 3
  },
  {
    first_name: 'bob',
    candy_box: 2
  },
  {
    first_name: 'sally',
    candy_box: 1
  },
  {
    first_name: 'mike',
    candy_box: 3
  },
  {
    first_name: 'donna',
    candy_box: 3
  },
  {
    first_name: 'willy',
    candy_box: 2
  },
  {
    first_name: 'samm',
    candy_box: 1
  },
  {
    first_name: 'poppy',
    candy_box: 1
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
