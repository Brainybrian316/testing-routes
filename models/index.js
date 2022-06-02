// import models
const CandyBox = require('./CandyBox');
const Candies = require('./Candies');
const Users = require('./Users');
const Subscription = require('./Subscription');


// Products belongsTo Category
CandyBox.belongsTo(Candies, {
  foreignKey: 'candies_id'
});
// Categories have many Products
Candies.hasMany(CandyBox, {
  foreignKey: 'candies_id'
});
// Products belongToMany Tags (through ProductTag)
CandyBox.belongsToMany(Users, {
  through: Subscription,
  foreignKey: 'CandyBox_id',
});
// Tags belongToMany Products (through ProductTag)
Users.belongsToMany(CandyBox, {
  through: Subscription,
  foreignKey: 'user_id',
});

module.exports = {
  CandyBox,
  Candies,
  Users,
  Subscription

};
