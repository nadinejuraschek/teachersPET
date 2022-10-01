import { assignmentApiRoutes } from './api/assignment.js';
import { classApiRoutes } from './api/class.js';
import { lessonplansApiRoutes } from './api/lessonplans.js';
import { studentNotesApiRoutes } from './api/studentNotes.js';
import { studentsApiRoutes } from './api/students.js';
import { userApiRoutes } from './api/user.js';
import { calendarHtmlRoutes } from './html/calendar.js';
import { classHtmlRoutes } from './html/class.js';
import { generalHtmlRoutes } from './html/general.js';
import { studentsHtmlRoutes } from './html/students.js';
import { userHtmlRoutes } from './html/user.js';

export const setRoutes = (app) => {
  app.use('/api', assignmentApiRoutes);
  app.use('/api/classes', classApiRoutes);
  app.use('/api/lessonplans', lessonplansApiRoutes);
  app.use('/api/students/notes', studentNotesApiRoutes);
  app.use('/api/students', studentsApiRoutes);
  app.use('/api', userApiRoutes);
  app.use('/calendar', calendarHtmlRoutes);
  app.use('/classes', classHtmlRoutes);
  app.use('/students', studentsHtmlRoutes);
  app.use('/', userHtmlRoutes);
  app.use('/', generalHtmlRoutes);
};
