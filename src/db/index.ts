import { Sequelize } from 'sequelize';
import config from '../config';

export const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass,{
  dialect: 'mysql',
  // host: config.host,
  // port: config.port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export * from './methods';
export * from './models';
