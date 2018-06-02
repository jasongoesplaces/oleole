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

  //get route for all offense players
  app.get("/api/offense", (req, res) => {
    db.Offense.findAll({}).then((dbOffense) => res.json(dbOffense))
  })

  //get route for offense players of a specific team

  //get route for all defesnse players
  app.get("/api/defense", (req, res) => {
    db.Defense.findAll({}).then((dbDefense) => res.json(dbDefense))
  })

  //get route for defense players of a specific team

  //get route from images
  

  // post route for adding credits


    // POST route for saving a new bet