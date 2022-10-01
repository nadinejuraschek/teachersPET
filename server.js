import * as dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import db from "./models/index.js";
import ejs from "ejs";
import express from "express";
import favicon from 'serve-favicon';
import jwt from 'jsonwebtoken';

dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));
// app.use(favicon(__dirname + '/public/images/favicon.ico'));
// app.use(cookieParser());

// LOGIN
//decode the jwt token
/* app.use((req, res, next) => {
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
}); */

// EJS
// app.set("view engine", "ejs");

// ROUTES
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
/* if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
} */

// Starting the server, syncing our models ------------------------------------/
/* db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
}); */

// module.exports = app;