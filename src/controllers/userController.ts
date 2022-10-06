import { Request, Response } from 'express';
import * as userService from '../services/userService';
//#TODO:
import * as userRepository from '../repositories/userRepository';
import { resolveJWT } from '../utils/jwtResolver';

export async function createUser(req: Request, res: Response) {
  const { name, email, password, confirmPassword } = req.body;
  await userService.createUser(name, email, password, confirmPassword);
  res.sendStatus(201);
}

export async function getUsers(req: Request, res: Response) {
  const data = await userRepository.getUsers();
  res.status(203).send(data);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const token = await userService.login(email, password);
  res.status(200).send(token);
}
