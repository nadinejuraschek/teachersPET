import { studentNotesApiController } from '../../controllers/api/studentNotes.js';
import express from 'express';
const router = express.Router();

router
  .route('/')
  .post(studentNotesApiController.create);

router
  .route('/:id')
  .get(studentNotesApiController.getAll)
  .delete(studentNotesApiController.delete);

export const studentNotesApiRoutes = router;
