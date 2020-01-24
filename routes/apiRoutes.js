/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  //================ User Routes ===============

  //Get user by id
  app.get("/api/user/:id", function(req, res) {
    db.User.findAll({ where: { id: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  //================ Classes Routes ===============

  // Get all classes
  app.get("/api/classes", function(req, res) {
    db.Class.findAll({}).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  // Get one class
  app.get("/api/classes/:id", function(req, res) {
    db.Class.findAll({ where: { id: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new class
  app.post("/api/classes", function(req, res) {
    db.Class.create(req.body).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  // Delete a class by id
  app.delete("/api/classes/:id", function(req, res) {
    db.Class.destroy({ where: { id: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  //============= Assignments Routes ==============

  // Get all assignments in a class
  app.get("/api/assignments/classes/:id", function(req, res) {
    db.Assignments.findAll({ where: { ClassId: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new assignment
  app.post("/api/assignments", function(req, res) {
    db.Assignment.create(req.body).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  // Delete an assignment by id
  app.delete("/api/students/:id", function(req, res) {
    db.Assignment.destroy({ where: { id: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });
};
