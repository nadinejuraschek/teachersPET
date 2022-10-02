import { calendarHtmlController } from '../../controllers/html/calendar.js';
import express from 'express';
const router = express.Router();

router.
  route('')
  .get(calendarHtmlController.renderCalendarView);

export const calendarHtmlRoutes = router;
