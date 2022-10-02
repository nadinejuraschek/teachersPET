import db from '../../models/index.js';

const renderClassView = (req, res) => {
  if (req.user) {
    const classId = req.params.id;
    Promise.all(
      [
        db.Class.findOne({ where: { _id: classId }}),
        db.Student.findAll({ where: { ClassId: classId }}),
        db.Lessonplan.findAll({ where: { ClassId: classId }}),
        db.Assignment.findAll({ where: { ClassId: classId }})
      ])
      .then((data) => {
        // console.log(data)
        let classData = data[0];
        let studentData = data[1];
        let lessonplanData = data[2];
        let assignmentData = data[3];

        // TEST
        // console.log(classData);
        // console.log(studentData);
        // console.log(lessonplanData);
        // console.log(assignmentData);

        res.render("classes", { classData: classData, studentData: studentData, lessonplanData, assignmentData: assignmentData});
      });
  } else {
    res.render("login");
  }
};

const renderLessonplanView = (req, res) => {
  if (req.user) {
    const classId = req.params.id;
    db.Lessonplan.findOne({ where: { ClassId: classId }}).then(data => {
      const lessonplanData = data;

      // TEST
      // console.log(lessonplanData);

      res.render("lessonplan", { lessonplanData: lessonplanData });
    });
  } else {
    res.render("login");
  }
};

export const classHtmlController = {
  renderClassView,
  renderLessonplanView,
};
