module.exports = function(sequelize, DataTypes) {
    var Defense = sequelize.define("Defense", {
        // Defense model 
        name: DataTypes.STRING,
        player: DataTypes.STRING,
        SA: DataTypes.INTEGER,
        GA: DataTypes.INTEGER,
        saves: DataTypes.INTEGER
      }, {
          timestamps: false
        }
    );
    return Defense
}