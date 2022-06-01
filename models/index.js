// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(User, {
  through: ProductTag,
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
User.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'user_id'
});

module.exports = {
  Product,
  Category,
  User,
  ProductTag,
};
