// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
// const ProductTag = require('./ProductTag');



User.belongsTo(Category, {
  foreignKey: 'candy_box'
});

Category.hasMany(User, {
  foreignKey: 'candy_box'
});

Product.belongsTo(Category, {
  foreignKey: 'candy_box'
})

Category.hasMany(Product, {
  foreignKey: 'candies'
})

User.hasMany(Product, {
  foreignKey: 'candy_box'
})

module.exports = { User, Category, Product };



