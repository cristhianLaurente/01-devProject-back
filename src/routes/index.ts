import { Response, Router } from 'express';
import user from './user';

export const handlerRes = (res: Response, status: number, data: any) => {
    res.status(status);
    res.json(data);
  };

const routes = Router();

routes.use('/users', user);

export default routes;
