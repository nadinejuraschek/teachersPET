import { assignmentApiController } from '../../controllers/api/assignment.js';
import express from 'express';
const router = express.Router();

router
  .route('/assignments')
  .post(assignmentApiController.create);

router
  .route('/assignments/:id')
  .delete(assignmentApiController.delete);

router
  .route('/classes/assignments/:id')
  .get(assignmentApiController.getAll)

export const assignmentApiRoutes = router;