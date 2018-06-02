module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      wins: DataTypes.INTEGER,
      losses: DataTypes.INTEGER,
      draws: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
      goals: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    return Teams
}