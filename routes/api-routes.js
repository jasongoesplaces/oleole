// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {

  //get route for all teams stats

  app.get("/api/teams", (req, res) => {
    db.Teams.findAll({}).then((dbTeams) => res.json(dbTeams))
  })

  //get route for specific team stats
  app.get("/api/teams/:id", (req, res) => {
    db.Teams.findOne({
      where: {
        id: req.params.id
      }}).then((dbTeams) => res.json(dbTeams))
  })

  //get route for all offense players
  app.get("/api/offense", (req, res) => {
    db.Offense.findAll({}).then((dbOffenses) => res.json(dbOffenses))
  })

  //get route for offense players of a specific team
  app.get("/api/offense/:id", function(req, res) {
    db.Offense.findAll({
      where: {
        teamID: req.params.id
      }}).then((dbTeamO) => res.json(dbTeamO))
  });

  //get route for all defesnse players
  app.get("/api/defense", (req, res) => {
    db.Defense.findAll({}).then((dbDefenses) => res.json(dbDefenses))
  })

  //get route for defense players of a specific team
  app.get("/api/defense/:id", function(req, res) {
    db.Defense.findAll({
      where: {
        teamID: req.params.id
      }}).then((dbTeamD) => res.json(dbTeamD))
  });


  //get route for users
  app.get("/api/users", (req, res) => {
    db.Users.findAll({}).then((dbUsers) => res.json(dbUsers))
  })

  //get route for specific user
  app.get("/api/users/:id", (req, res) => {
    db.Users.findOne({
      where: {
        id: req.params.id
      }}).then((dbUserID) => res.json(dbUserID))
  })


  

  // post route for adding credits
  app.put("/api/users/:id", function(req, res){
    db.Users.update({
      credits: req.body.data
    }, {
        where: {
          id: req.body.id
        }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  })



    // POST route for saving a new bet

}