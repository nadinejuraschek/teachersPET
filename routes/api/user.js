import { userApiController } from '../../controllers/api/user.js';
import express from 'express';
const router = express.Router();

router
  .route('/user')
  .get(userApiController.get);

router
  .route('/user/login')
  .post(userApiController.login);

router
  .route('/guestaccount')
  .post(userApiController.loginGuest);

router
  .route('/user/signup')
  .post(userApiController.signup);

router
  .route('/user/signout')
  .post(userApiController.signout);

export const userApiRoutes = router;
