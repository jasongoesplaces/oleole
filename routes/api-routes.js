// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  //get route for all teams stats

app.get("/api/teams", (req, res) => {
  db.Teams.findAll({}).then((dbTeams) => res.json(dbTeams))
})

  //get route for specific team stats
  app.get("/api/teams/:id", (req, res) => {
    db.Teams.findOne({
      where: {
        id: req.params.id
      }}).then(function(dbTeam) {
      res.json(dbTeam)
    })
})}
  //get route for offense

  //get route for defesnse

  //get route from images
  

  // post route for adding credits


    // POST route for saving a new bet