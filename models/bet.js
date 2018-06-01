module.exports = function(sequelize, DataTypes) {
    var Bet = sequelize.define("Bet", {
      userID: DataTypes.INTEGER,
      gameID: DataTypes.INTEGER,
      betAmount: DataTypes.INTEGER,
      betResult: DataTypes.INTEGER
    });
    return Bet;
  };