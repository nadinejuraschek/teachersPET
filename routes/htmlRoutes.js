var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/index", function(req, res) {
    db.Example.findAll({}).then(function(examplesdb) {
      res.render("index", {
        msg: "Welcome!",
        database: examplesdb
      });
    });
  });

  // Login & Sign Up Pages
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) { 
    res.render("signup");
  });

  // Classes and Students View
  app.get("/classes", function(req, res) {
    res.render("classes");
  });
  app.get("/students", function(req, res) {
    res.render("students");
  });
  app.get('/lessonplan', function(req, res){
    res.render('lessonplan');
  });

  // Calendar View
  app.get("/calendar", function(req, res) {
    res.render("calendar");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
