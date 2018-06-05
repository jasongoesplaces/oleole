module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  return Users;
};

var records = [
    { id: 1, username: 'oleole', password: 'goal', displayName: 'oleole', emails: [ { value: 'oleole@example.com' } ] }
  , { id: 2, username: 'test', password: 'test', displayName: 'test', emails: [ { value: 'test@example.com' } ] }
];
