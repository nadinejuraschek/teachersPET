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
};
