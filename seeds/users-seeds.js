const { Users } = require('../models');

const usersData = [
  {
    first_name: 'Bob',
  },
  {
    first_name: 'Joe',
  },
  {
    first_name: 'Lily',
  },
  {
    first_name: 'Sally',
  },
  {
    first_name: 'Mack',
  },
  {
    first_name: 'Linda',
  },
  {
    first_name: 'Sue',
  },
  {
    first_name: 'Mary',
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
