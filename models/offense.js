module.exports = function(sequelize, DataTypes) {
    var Offense = sequelize.define("Offense", {
        // Offense model 
        name: DataTypes.STRING,
        player: DataTypes.STRING,
        goals: DataTypes.INTEGER,
        sog: DataTypes.INTEGER,
        assists: DataTypes.INTEGER
        }, {
          timestamps: false
    });
    return Offense
}