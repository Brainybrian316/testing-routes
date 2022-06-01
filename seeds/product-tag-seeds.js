const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    user_id: 6,
  },
  {
    product_id: 1,
    user_id: 7,
  },
  {
    product_id: 1,
    user_id: 8,
  },
  {
    product_id: 2,
    user_id: 6,
  },
  {
    product_id: 3,
    user_id: 1,
  },
  {
    product_id: 3,
    user_id: 3,
  },
  {
    product_id: 3,
    user_id: 4,
  },
  {
    product_id: 3,
    user_id: 5,
  },
  {
    product_id: 4,
    user_id: 1,
  },
  {
    product_id: 4,
    user_id: 2,
  },
  {
    product_id: 4,
    user_id: 8,
  },
  {
    product_id: 5,
    user_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
