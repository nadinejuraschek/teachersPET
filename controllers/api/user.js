import db from "../../models/index.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createUser = (req, res) => {
  db.User.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: `Could not create user. Error: ${err}` });
    });
};

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

  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
  res.json(user);
};

const signup = async (req, res) => {
  req.body.email = req.body.email.toLowerCase();
  // has the password
  const password = await bcrypt.hash(req.body.password, 10);
  // create user in database
  const user = await db.User.create({
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email: req.body.email,
    password: password,
  }).then(data => {
    res.json({ message: 'User successfully created!'});
  }).catch(err => {
    res.json({ message: `Could not create user. Error: ${err}` });
  });

  // create cookie for user
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });
  res.json(user);
};

export const signout = (req, res) => {
  res.clearCookie('token');
  res.json('Signed out.');
};

export const userApiController = {
  get: getCurrentUser,
  create: createUser,
  login: login,
  signup: signup,
  signout: signout,
};
