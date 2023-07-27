const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Score = sequelize.define("score", {
    username: {
      type: DataTypes.STRING
    },
    score: {
      type: DataTypes.INTEGER
    }
  },
    {
      timestamps: true
    });

  return Score;
};