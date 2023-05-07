import { Request, Response, NextFunction } from 'express';

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error.message);
  if (error.type === 'unauthorized') {
    return res.status(401).send(error.message);
  } else if (error.type === 'alreadyUsed') {
    return res.status(409).send(error.message);
  } else if (error.type === 'badRequest') {
    return res.status(400).send(error.message);
  }
  res.status(500).send(error.message);
}
