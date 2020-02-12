import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import config from './config';
import logger from './logger';
import routes from './routes';

// Create a new express instance
const server = express();

// Call midlewares
server.use(bodyParser.json());
server.use(cors());
server.use(logger);
server.use(helmet());

// Set all routes from routes folder
server.use('/', routes);

server.listen(config.port, () => {
  console.log(`Server started on http://${config.host}:${config.port}`);
});

export default server;
