// *****Created Product Model

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create candy_category model
class Product extends Model {}

// const Candy70sData = ['Twix', 'Snickers', 'M&Ms', 'Milky Way', 'Hershey', 'Kit Kat',]
// const candy70sData = Candy70sData[Math.floor(Math.random() * Candy70sData.length)];

// const Candy80sData = ['hello', '', 'my', 'name', 'is', 'candy',]
// const candy80sData = Candy80sData[Math.floor(Math.random() * Candy80sData.length)];

// const Candy90sData = ['Tdfa', 'yoyo', 'poopoo', 'meemee', 'hshs', 'dhfdak',]
// const candy90sData = Candy90sData[Math.floor(Math.random() * Candy90sData.length)];


//define table columns
Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
}
);

module.exports = Product;
