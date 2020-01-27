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
app.post('/api/user/signout', function(req, res) {
  res.clearCookie('token');
  res.json('Signed out.');
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
  } else {
    res.render("login");
  };
});

// ==================================================
// CLASSES, STUDENTS, LESSONPLANS
// ==================================================
app.get("/classes/:id", function(req, res) {
  if(req.user){
    let class_id = req.params.id;
    Promise.all(
      [
        db.Class.findOne({ where: { id: class_id }}), 
        db.Student.findAll({ where: { ClassId: class_id }}),
        db.Lessonplan.findAll({ where: { ClassId: class_id }})
        // , db.Assignment.findAll({ where: { ClassId: class_id }})
      ]).then((data) => {
      let classData = data[0];
      let studentData = data[1];
      let lessonplanData = data[2];
      // let assignmentData = data[3];

      // TEST
      // console.log(classData);
      // console.log(studentData);
      // console.log(lessonplanData);
      // console.log(assignmentData);

      res.render("classes", { classData: classData, studentData: studentData, lessonplanData: lessonplanData });
    });
  } else {
  res.render("login");
  }
});
app.get("/students/:id", function(req, res) {
  if(req.user){
    let student_id = req.params.id;
    Promise.all(
      [
        db.Student.findOne({ where: { id: student_id }})
      ]).then((data) => {
      let studentData = data[0];

      // TEST
      // console.log(studentData);

      res.render("students", { studentData: studentData });
    });
  } else {
  res.render("login");
  }
});
app.get("/classes/lessonplan/:id", function(req, res) {
  if(req.user){
    let class_id = req.params.id;
      db.Lessonplan.findOne({ where: { ClassId: class_id }}).then((data) => {
      let lessonplanData = data;

      // TEST
      console.log(lessonplanData);

      res.render("lessonplan", { lessonplanData: lessonplanData });
    });
  } else {
  res.render("login");
  }
});

// ==================================================
// CALENDAR
// ==================================================
app.get("/calendar", function(req, res) {
  if(req.user){
    res.render("calendar");
  }
    res.render("login");
});

// ==================================================
// ERROR
// ==================================================
app.get("*", function(req, res) {
  res.render("404");
});
};
