module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    credits: DataTypes.INTEGER
  });
  return Users;
};