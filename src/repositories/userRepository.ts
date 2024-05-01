import { connectToDatabase, Kitten, User } from '../database/database';
import mongoose from 'mongoose';

/* export async function createUser(
  name: string,
  email: string,
  password: string
) {
  await client.users.create({
    data: {
      name,
      email,
      password,
    },
  });
} */

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  await connectToDatabase();

  const newUser = new User({ name, email, password });
  await newUser.save();

  const savedUserId = newUser._id;
  
  mongoose.connection.close();
  return true;
}

export async function getUsers() {
  //const result = await client.users.findMany();
  const result = "getUsers pass";
  return result;
}

export async function findUserByEmail(email: string) {
  /* const result = await client.users.findUnique({
    where: {
      email,
    },
  }); */
  const result = "findUserByEmail pass";
  return result;
}
