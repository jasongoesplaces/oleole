module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
      //  Teams model 
      name: DataTypes.STRING,
      wins: DataTypes.INTEGER,
      losses: DataTypes.INTEGER,
      draws: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
      goals: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    Teams.associate = function(models) {
        Teams.hasMany(models.Offense, {
            onDelete: "cascade"
        })
    }

    Teams.associate = function(models) {
        Teams.hasMany(models.Defense, {
            onDelete: "cascade"
        })
    }

    return Teams
}