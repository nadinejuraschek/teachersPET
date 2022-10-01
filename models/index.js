"use strict";

import envConfig from '../config/config.json' assert {type: 'json'};

import Sequelize from "sequelize";
import fs from "fs";
import {logger} from '../logger/index.js';
import path from "path";

// const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const db = {};

const config = envConfig[env];

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
    }
  );
}

sequelize.authenticate().then(() => logger('Models').info('Connection to DB successful.')).catch(err => logger('Models').error('Could not connect to database. Error: ', err))

/* fs.readdirSync(__dirname)
.filter(function(file) {
  return (
    file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );
})
.forEach(function(file) {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
*/

export default db;
