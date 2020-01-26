var db = require("../models");

module.exports = function(app) {
  
app.get('/', function(req, res){
  if(req.user){
    res.redirect('/index');
  }
  res.redirect('/login');
});

// ==================================================
// USER
// ==================================================
app.get("/login", function(req, res) {
  res.render("login");
});
app.get("/signup", function(req, res) { 
  res.render("signup");
});

// ==================================================
// DASHBOARD
// ==================================================
// Load index page
app.get("/index", function(req, res) {
  if(req.user){
    Promise.all([db.User.findOne({ where: {id: req.user }}), db.Class.findAll()]).then(function(data) {
      let userName = data[0].first_name;
      // console.log(userName);
      let classData = data[1];
      res.render("index", { name: userName, classData: classData });
    });
    // db.Class.findAll().then(function(classes) {
    //   // console.log(classes);
    //   res.render("index", { classData: classes });
    // });
    // db.User.findOne({ where: {id: req.user }}).then(function(user){

    // });
  } else {
    res.render("login");
  };
});

app.post('/api/user/signout', function(req, res) {
  res.clearCookie('token');
  res.json('Signed out.');
});

// Classes and Students View
app.get("/classes/:id", function(req, res) {
  if(req.user){
    Promise.all([db.Class.findOne({ where: { id: req.params.id }}), db.Student.findAll({ where: { ClassId: req.params.id }})]).then((data) => {
      let classData = data[0];
      let studentData = data[1];
      // console.log(studentData[0].first_name);
      res.render("classes", { classData: classData, studentData: studentData });
    });
  } else {
  res.render("login");
  }
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
