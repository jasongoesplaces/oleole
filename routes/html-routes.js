var path = require("path");
var passport = require("passport")


// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"))
  })

  app.post("/login", 
    passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/dashboard"})
  )

  app.get("/dashboard", 
    //require("connect-ensure-login").ensureLoggedIn(),
    function(req, res) {
      res.sendFile(path.join(__dirname, "../views/dashboard.html"));
  });

  app.get("/team", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/team.html"))
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  })
};