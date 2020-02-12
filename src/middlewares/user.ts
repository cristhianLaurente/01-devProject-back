import { NextFunction, Request, Response } from 'express';

export const existsUser = (req: Request, response: Response, next: NextFunction) => {
  return next();
};
