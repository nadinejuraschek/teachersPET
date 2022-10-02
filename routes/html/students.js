import { studentsHtmlController } from '../../controllers/html/students.js';
import express from 'express';
const router = express.Router();

router
  .route('/:id')
  .get(studentsHtmlController.renderStudentsView);

export const studentsHtmlRoutes = router;