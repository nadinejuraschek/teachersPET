"use strict";

import envConfig from '../config/config.json' assert {type: 'json'};

import Sequelize from "sequelize";
import fs from "fs";
import {logger} from '../logger/index.js';
import path from "path";
import { tables } from './tables/index.js';

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

tables.forEach(table => {
  table(sequelize).sync().then(data => {
    logger('Models').info(`Table ${table.name} synced successfully!`);
    logger('Models').debug('Data: ', data);
  }).catch(err => logger('Models').error(`Table ${table.name} could not sync. Error: `, err));
  // db[table.name] = table;
});

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
