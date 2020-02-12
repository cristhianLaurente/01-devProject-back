import * as db from './db';
import server from './server';

// Connects to the Database -> then starts server
db.sequelize
  .authenticate()
  .then(() => {
    return server;
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
