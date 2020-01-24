/* eslint-disable camelcase */
var db      = require("../models"),
    bcrypt  = require('bcryptjs'),
    jwt     = require('jsonwebtoken');

module.exports = function(app) {
  //================ User Routes ===============

  //Get user by id
  // app.get("/api/user/:id", function(req, res) {
  //   db.User.findAll({ where: { id: req.params.id } }).then(function(
  //     project2_db
  //   ) {
  //     res.json(project2_db);
  //   });
  // });

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


  app.get('/api/user', function(req, res){
    console.log(req.user);
    res.json(req.user);
  });

  app.post('/api/user/signup', async function(req,res){
    req.body.email = req.body.email.toLowerCase();
        //has the password
        const password =  await bcrypt.hash(req.body.password, 10);
        //create user in database
        const user = await db.User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: password,
        });
        
        //create cookie for user 
       const token= jwt.sign({id: user.id}, process.env.APP_SECRET);
       res.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
            });
        console.log("\n\n\n\n\n\n\n\n\n", user);    
        res.json(user);
  })
  app.post('/api/user/login', async function(req,res){
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.json('No User found.');
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      res.json('Incorrect password!');
    }
    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    res.json(user);
  });
};
