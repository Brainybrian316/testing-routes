// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'candy_box'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'candy_box'
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
