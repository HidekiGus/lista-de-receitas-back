import * as userRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/* export async function createUser(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword) {
    throw { type: 'badRequest', message: 'Senhas não conferem!' };
  }

  const userData = await userRepository.findUserByEmail(email);

  if (userData !== null) {
    throw { type: 'alreadyUsed', message: 'Esse email já está em uso!' };
  }

  const encryptedPassword = bcrypt.hashSync(password, 10);

  await userRepository.createUser(name, email, encryptedPassword);
} */

export async function createUser(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword) {
    throw { type: 'badRequest', message: 'Senhas não conferem!' };
  }

  //const userData = await userRepository.findUserByEmail(email);

  /* if (userData !== null) {
    throw { type: 'alreadyUsed', message: 'Esse email já está em uso!' };
  } */
  const encryptedPassword = bcrypt.hashSync(password, 10);
  await userRepository.createUser(name, email, encryptedPassword);
}

/* export async function login(email: string, password: string) {
  const userData = await userRepository.findUserByEmail(email);

  if (userData === null) {
    throw {
      type: 'notFound',
      message: 'Check email and password and try again!',
    };
  } else if (bcrypt.compareSync(password, userData.password)) {
    return await generateJWT(email);
  } else {
    throw {
      type: 'unauthorized',
      message: 'Check your email and password and try again!',
    };
  }
} */

export async function login(email: string, password: string) {
  console.log(login, password);
  return true;
}

/* export async function generateJWT(email: string) {
  const { id: userId } = await userRepository.findUserByEmail(email);
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign({ userId }, secretKey);
  return token;
} */

export async function generateJWT() {
  console.log("generate JWT pass");
  return true;
}
