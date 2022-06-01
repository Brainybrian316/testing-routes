const { Product } = require('../models');

const productData = [
  {
    product_name: 'Andes Mints',
    price: 14.99,
    stock: 14,
    candy_box: 1,
  },
  {
    product_name: 'Appleheads',
    price: 90.0,
    stock: 25,
    candy_box: 1,
  },
  {
    product_name: 'Astronaut Ice Cream Sandwich',
    price: 22.99,
    stock: 12,
    candy_box: 1,
  },
  {
    product_name: 'Blow Pops',
    price: 12.99,
    stock: 50,
    candy_box: 1,
  },
  {
    product_name: 'BuckEyes',
    price: 29.99,
    stock: 22,
    candy_box: 1,
  },
  {
    product_name: 'BarNone',
    price: 14.99,
    stock: 14,
    candy_box: 2,
  },
  {
    product_name: 'Nerds',
    price: 90.0,
    stock: 25,
    candy_box: 2,
  },
  {
    product_name: 'Spree',
    price: 22.99,
    stock: 12,
    candy_box: 2,
  },
  {
    product_name: 'Skor',
    price: 12.99,
    stock: 50,
    candy_box: 2,
  },
  {
    product_name: 'Cow Tales',
    price: 29.99,
    stock: 22,
    candy_box: 2,
  },
  {
    product_name: 'Baby Bottle Pops',
    price: 14.99,
    stock: 14,
    candy_box: 3,
  },
  {
    product_name: 'Color Your Mouth Gumballs',
    price: 90.0,
    stock: 25,
    candy_box: 3,
  },
  {
    product_name: 'Creme Savers',
    price: 22.99,
    stock: 12,
    candy_box: 3,
  },
  {
    product_name: 'Gummi Hot Dog',
    price: 12.99,
    stock: 50,
    candy_box: 3,
  },
  {
    product_name: 'Nerds Rope',
    price: 29.99,
    stock: 22,
    candy_box: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
