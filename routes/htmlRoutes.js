var db = require("../models");

module.exports = function(app) {
  app.get('/', function(req, res){
    if(req.user){
      res.redirect('/index');
    }
      res.redirect('/login');
  });

  // Login & Sign Up Pages
  app.get("/login", function(req, res) {
    res.render("login");
  });
  app.get("/signup", function(req, res) { 
    res.render("signup");
  });

  // Load index page
  app.get("/index", function(req, res) {
    if(req.user){
      res.render("index");
    }
      res.render("login");
  });

  app.post('/api/user/signout', function(req, res) {
    res.clearCookie('token');
    res.json('Signed out.');
  });

  // Classes and Students View
  app.get("/classes", function(req, res) {
    res.render("classes");
  });

  app.get("/classes/:id", function(req, res) {
    res.render("classes");
  });

  app.get("/students", function(req, res) {
    res.render("students");
  });
  app.get("/lessonplan", function(req, res) {
    res.render("lessonplan");
  });

  // Calendar View
  app.get("/calendar", function(req, res) {
    if(req.user){
      res.render("calendar");
    }
      res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
