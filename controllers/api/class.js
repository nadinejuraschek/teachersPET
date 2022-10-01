import db from "../../models/index.js";

const getAllClasses = (req, res) => {
  db.Class.findAll({}).then(data => {
    res.json(data);
  });
};

const getClassById = (req, res) => {
  db.Class.findAll({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

const createClass = (req, res) => {
  db.Class.create(req.body).then(data => {
    res.json(data);
  });
};

const deleteClassById = (req, res) => {
  db.Class.destroy({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

export const classApiController = {
  getAll: getAllClasses,
  getById: getClassById,
  create: createClass,
  delete: deleteClassById,
};
