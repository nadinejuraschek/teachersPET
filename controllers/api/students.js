import db from "../../models/index.js";

const getAllStudents = (req, res) => {
  db.Student.findAll({}).then(data => {
    res.json(data);
  });
};

const getStudent = (req, res) => {
  db.Student.findAll({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

const createStudent = (req, res) => {
  db.Student.create(req.body).then(data => {
    res.json(data);
  });
};

const deleteStudentById = (req, res) => {
  db.Student.destroy({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

export const studentsApiController = {
  getAll: getAllStudents,
  get: getStudent,
  create: createStudent,
  delete: deleteStudentById,
};
