"use strict";

import envConfig from '../config/config.json' assert {type: 'json'};

import Sequelize from "sequelize";
import {logger} from '../logger/index.js';
import { tables } from './tables/index.js';

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
  db[table.name] = table;
  /* table(sequelize).sync().then(data => {
    logger('Models').info(`Table ${table.name} synced successfully!`);
    logger('Models').debug('Data: ', data);
  }).catch(err => logger('Models').error(`Table ${table.name} could not sync. Error: `, err)); */
});


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
