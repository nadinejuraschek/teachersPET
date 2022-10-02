import db from "../../models/index.js";

const getAllNotesForClass = (req, res) => {
  db.Studentnote.findAll({ where: { ClassId: req.params.id } }).then(data => {
    res.json(data);
  });
};

const createNotes = (req, res) => {
  db.Studentnote.create(req.body).then(data => {
    res.json(data);
  });
};

const deleteNotesById = (req, res) => {
  db.Studentnote.destroy({ where: { id: req.params.id } }).then(data => {
    res.json(data);
  });
};

export const studentNotesApiController = {
  getAll: getAllNotesForClass,
  create: createNotes,
  delete: deleteNotesById,
};