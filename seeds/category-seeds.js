const { Category } = require('../models');

const categoryData = [
  {
    category_name: '70s',
  },
  {
    category_name: '80s',
  },
  {
    category_name: '90s',
  },
  // {
  //   category_name: 'test',
  // },
  // {
  //   category_name: 'test',
  // },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
