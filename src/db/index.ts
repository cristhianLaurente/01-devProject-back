import { Sequelize } from 'sequelize';
import config from '../config';

export const sequelize: Sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: 'mysql', 
  logging: console.log, 
  dialectOptions:{
    useUTC: true, 
    dateStrings: true, 
    typeCast: true
  }
});

export * from './methods';
export * from './models';
