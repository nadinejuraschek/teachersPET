import { generalHtmlController } from '../../controllers/html/general.js';
import express from 'express';
const router = express.Router();

router.
  route('/')
  .get(generalHtmlController.renderHome);

router.
  route('/index')
  .get(generalHtmlController.renderDashboard);

router
  .route('*')
  .get(generalHtmlController.renderNotFound);

export const generalHtmlRoutes = router;
