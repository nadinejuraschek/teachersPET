import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import db from "./models/index.js";
import express from "express";
import favicon from 'serve-favicon';
import {fileURLToPath} from 'url';
import jwt from 'jsonwebtoken';
import path from 'path';
import {setRoutes} from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(cookieParser());

// LOGIN
// decode the jwt token
app.use((req, res, next) => {
  //destructure the token
  const { token } = req.cookies;

  //if the token exists
  if (token) {
    //get the verified userID from jwt
    const { id } = jwt.verify(token, process.env.APP_SECRET);
    //set that  userId on the request object
    req.user = id;
  }
  //carry on the request after the middleware
  next();
});

// EJS
app.set("view engine", "ejs");

// ROUTES
setRoutes(app);

let syncOptions = { alter: true, force: false };

// If running a test, set syncOptions.force to true
// clearing the `teachers_pet_testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ----------------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(chalk.green(
      `🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`));
  });
});

export default app;
