import db from "../../models/index.js";

const getAllClassAssignments = (req, res) => {
  db.Assignment.findAll({ where: { ClassId : req.params.id }}).then(data => {
    res.json(data);
  });
};

const createAssignment = (req, res) => {
  db.Assignment.create(req.body).then(data => {
    res.json(data);
  });
};

const deleteAssignmentById = (req, res) => {
  db.Assignment.destroy({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

export const assignmentApiController = {
  getAll: getAllClassAssignments,
  create: createAssignment,
  delete: deleteAssignmentById,
};
