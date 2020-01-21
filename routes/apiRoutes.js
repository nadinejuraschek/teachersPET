/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Get all classes
  app.get("/api/classes", function(req, res) {
    db.Class.findAll({}).then(function(project2_db) {
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

  // Get all students
  app.get("/api/students", function(req, res) {
    db.Student.findAll({}).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  // Get all students in a class
  app.get("/api/students/classes/:id", function(req, res) {
    db.Student.findAll({ where: { ClassId: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new student
  app.post("/api/students", function(req, res) {
    db.Student.create(req.body).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  // Update a student by id
  app.put("/api/students/:id", function(req, res) {
    db.Student.update({ where: { id: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Delete a student by id
  app.delete("/api/students/:id", function(req, res) {
    db.Student.destroy({ where: { id: req.params.id } }).then(function(
      project2_db
    ) {
      res.json(project2_db);
    });
  });
};
