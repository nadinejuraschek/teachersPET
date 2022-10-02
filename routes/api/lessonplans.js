import { lessonplansApiController } from '../../controllers/api/lessonplans.js';
import express from 'express';
const router = express.Router();

router
  .route('/')
  .get(lessonplansApiController.getAll)
  .post(lessonplansApiController.create);

router
  .route('/:id')
  .get(lessonplansApiController.get)
  .delete(lessonplansApiController.delete);

export const lessonplansApiRoutes = router;
