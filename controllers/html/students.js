import db from '../../models/index.js';

const renderStudentsView = (req, res) => {
  if (req.user) {
    const studentId = req.params.id;
    Promise.all(
      [
        db.Student.findOne({ where: { _id: studentId }}),
      ])
      .then((data) => {
        const studentData = data[0];

        // TEST
        // console.log(studentData);

        res.render("students", { studentData: studentData });
      });
  } else {
    res.render("login");
  }
};

export const studentsHtmlController = {
  renderStudentsView,
};
