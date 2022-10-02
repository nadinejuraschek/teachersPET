import db from "../../models/index.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logger } from "../../logger/index.js";

const getCurrentUser = (req, res) => {
  // console.log(req.user);
  res.json(req.user);
};

const login = async (req, res) => {
  const user = await db.User.findOne({ where: { email: req.body.email } });

  if (!user) {
    res.json({message: 'No User found.'});
    return;
  };

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    res.json({message: 'Incorrect password!'});
    return;
  };

  const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
  res.json(user);
};

const signup = async (req, res) => {
  // has the password
  const password = await bcrypt.hash(req.body.password, 10);

  // create user in database
  await db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email.toLowerCase(),
    password: password,
  }).then(data => {
    logger('controllers - api - user').debug('data: ', data);
    // create cookie for user
    const token = jwt.sign({ id: data._id }, process.env.APP_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    res.json(data);
  }).catch(err => {
    throw new Error(err);
    // res.json({ message: `Could not create user. Error: ${err}` });
  });
};

export const loginGuestUser = async (req, res) => {
  const user = await db.User.findOne({ where: { email: process.env.GUEST_USER_EMAIL } });

  if (!user) {
    res.json({message: 'No User found.'});
    return;
  };

  const valid = await bcrypt.compare(process.env.GUEST_USER_PASSWORD, user.password);
  if (!valid) {
    res.json({message: 'Incorrect password!'});
    return;
  };

  const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
  res.json(user);
};

export const signout = (req, res) => {
  res.clearCookie('token');
  res.json('Signed out.');
};

export const userApiController = {
  get: getCurrentUser,
  login: login,
  loginGuest: loginGuestUser,
  signup: signup,
  signout: signout,
};
