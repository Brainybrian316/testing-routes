const { ProductTag } = require('../models');

const productTagData = [
  {
    candies: 1,
    user_id: 6,
  },
  {
    candies: 1,
    user_id: 7,
  },
  {
    candies: 1,
    user_id: 8,
  },
  {
    candies: 2,
    user_id: 6,
  },
  {
    candies: 3,
    user_id: 1,
  },
  {
    candies: 3,
    user_id: 3,
  },
  {
    candies: 3,
    user_id: 4,
  },
  {
    candies: 3,
    user_id: 5,
  },
  {
    candies: 4,
    user_id: 1,
  },
  {
    candies: 4,
    user_id: 2,
  },
  {
    candies: 4,
    user_id: 8,
  },
  {
    candies: 5,
    user_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
