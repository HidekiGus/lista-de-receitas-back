import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://gustavohidekiguenka:JXpCgL4LK6fgHBds@cluster.mr555dy.mongodb.net/livro-de-receitas?retryWrites=true&w=majority';

const client = new MongoClient(uri);

export default client;

export async function main() {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases: ');
  databasesList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });
}

main().catch(console.error);
