import { Request, Response, Router } from 'express';
import * as services from '../services';
import { handlerRes } from '.';
import { verifyJwt} from '../middlewares'

const router = Router();

// Get all users
router.get('/', verifyJwt, (req: Request, res: Response) => {
  handlerRes(res, 200, services.listUsers(req.query))
});

export default router;
