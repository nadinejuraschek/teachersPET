import { classApiController } from '../../controllers/api/class.js';
import express from 'express';
const router = express.Router();

router
  .route('/')
  .get(classApiController.getAll)
  .post(classApiController.create);

router
  .route('/:id')
  .get(classApiController.getById)
  .delete(classApiController.delete);

export const classApiRoutes = router;
