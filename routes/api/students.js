import { studentsApiController } from '../../controllers/api/students.js';
import express from 'express';
const router = express.Router();

router
  .route('/')
  .get(studentsApiController.getAll)
  .post(studentsApiController.create);

router
  .route('/:id')
  .get(studentsApiController.get)
  .delete(studentsApiController.delete);

export const studentsApiRoutes = router;
