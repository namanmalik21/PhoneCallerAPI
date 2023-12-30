

const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbConfig');

const GlobalSpamNumbers = sequelize.define('GlobalSpamNumbers', {
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
});

module.exports = GlobalSpamNumbers;
