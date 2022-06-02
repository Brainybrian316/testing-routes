const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Candies extends Model {}

Candies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    candy_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'candies'
  }
);

module.exports = Candies;
