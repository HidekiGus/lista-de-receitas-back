import { connectToDatabase, Kitten, User } from '../database/database';

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
  console.log("createUser pass");
  await connectToDatabase();

  const newUser = new User({ name, email, password });

  await newUser.save();

  const savedUserId = newUser._id;
  

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
