import { Request, Response, NextFunction } from 'express';

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send(error.message);
}