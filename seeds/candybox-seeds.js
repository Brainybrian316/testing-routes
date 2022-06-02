const { CandyBox } = require('../models');

const candyBoxData = [
  {
    decade: '70s',
    price: 14.99,
    stock: 14,
    candies_id: 1,
  },
  {
    decade: '80s',
    price: 14.99,
    stock: 25,
    candies_id: 5,
  },
  {
    decade: '90s',
    price: 14.99,
    stock: 12,
    candies_id: 4,
  },
];

const seedCandyBox = () => CandyBox.bulkCreate(candyBoxData);

module.exports = seedCandyBox;
