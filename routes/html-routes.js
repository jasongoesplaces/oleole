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

  app.post("/api/users", 
    passport.authenticate("local", { failureRedirect: "/fail", successRedirect: "/success"})
  )

  app.get("/fail",
  function(req, res){
    console.log("we failed");
    console.log(req.session);
    res.json(false);
  })

  app.get("/success", 
    //require("connect-ensure-login").ensureLoggedIn(),
    function(req, res) {
      console.log("made it")
      res.json(true);
  });

  app.get("/team", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/team.html"))
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  })
};