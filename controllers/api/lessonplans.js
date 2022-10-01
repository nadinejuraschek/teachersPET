import db from "../../models/index.js";

const getAllLessonplans = (req, res) => {
  db.Lessonplan.findAll({}).then(data => {
    res.json(data);
  });
};

const getLessonplan = (req, res) => {
  db.Lessonplan.findAll({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

const createLessonplan = (req, res) => {
  db.Lessonplan.create(req.body).then(data => {
    res.json(data);
  });
};

const deleteLessonplanById = (req, res) => {
  db.Lessonplan.destroy({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

export const lessonplansApiController = {
  getAll: getAllLessonplans,
  get: getLessonplan,
  create: createLessonplan,
  delete: deleteLessonplanById,
};
