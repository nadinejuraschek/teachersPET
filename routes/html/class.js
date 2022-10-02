import { classHtmlController } from '../../controllers/html/class.js';
import express from 'express';
const router = express.Router();

router.
  route('/:id')
  .get(classHtmlController.renderClassView);

router.
  route('/lessonplan/:id')
  .get(classHtmlController.renderLessonplanView);

export const classHtmlRoutes = router;
