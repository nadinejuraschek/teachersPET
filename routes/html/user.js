import { userHtmlController } from '../../controllers/html/user.js';
import express from 'express';
const router = express.Router();

router
  .route('/login')
  .get(userHtmlController.renderLogin);

router
  .route('/signup')
  .get(userHtmlController.renderSignUp);

export const userHtmlRoutes = router;
