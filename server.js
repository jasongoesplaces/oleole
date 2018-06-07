var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var sequelize = require('sequelize');
var charts = require('chart.js');
var uuidv4 = require('uuid/v4');

// Configure the local strategy for use by Passport.
passport.use(new Strategy({
  passReqToCallback: true
},
  function (req, username, password, cb) {
    console.log("we're in the passport strat");
    db.Users.find({
      where: { username: username, pass: password }, function(err, user) {
        console.log("woohoo!");
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      }
    });
  }
));

// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, cb) {
  console.log("serializing")
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  console.log("deserializing")
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;




// Requiring our models for syncing
var db = require("./models");
app.use(require('express-session')({
  genid: function (req) {
    return uuidv4()
  }, secret: 'oleole goal'
}));

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.



// Initialize Passport and restore authentication state, if any, from the
// session.
// app.use(passport.initialize());
// app.use(passport.session());


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});