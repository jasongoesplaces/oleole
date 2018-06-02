var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..\views\index.html"));
  });

  app.get("/teams", function(req, res) {
    res.sendFile(path.join(__dirname, "..\views\team.html"));
  });

};

