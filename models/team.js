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
    return Teams

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

      var Defense = sequelize.define("Defense", {
        // Defense model 
        name: DataTypes.STRING,
        player: DataTypes.STRING,
        SA: DataTypes.INTEGER,
        GA: DataTypes.INTEGER,
        saves: DataTypes.INTEGER
      }, {
          timestamps: false
      });
      return Defense
  
}