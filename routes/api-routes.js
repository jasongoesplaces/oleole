// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  //get route for team stats

  //get route for offense

  //get route for defesnse

  //get route from images
  

  // post route for adding credits


    // POST route for saving a new bet
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the bet we want to
    // place into our table. 
    db.Bet.create({
      userID: ,
      gameID: 
    }).then(function(dbBet) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBet);
    });
  });