import client from '../database/database';

export async function createUser(
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
}

export async function getUsers() {
  const result = await client.users.findMany();
  return result;
}

export async function findUserByEmail(email: string) {
  const result = await client.users.findUnique({
    where: {
      email,
    },
  });
  return result;
}
