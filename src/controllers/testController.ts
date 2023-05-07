import { Request, Response } from 'express';
import { main } from '../database/database';
import client from '../database/database';
// // Defining the Mongoose schema

// // Creating Mongoose model
// const Test = mongoose.model('Test', testSchema);

export async function testCreateRecipe(req: Request, res: Response) {
  try {
    const { title, image, portions, time, ingredients, method, authorization } =
      req.body;

    await client.connect();
    // break function below into service that authorizes and giver username
    const result = await client
      .db('livro-de-receitas')
      .collection('tests')
      .insertOne({
        title,
        image,
        portions,
        time,
        ingredients,
        method,
        authorization,
      });

    const objectId = result.insertedId;
    res.status(201).send(`ObjectID: ${objectId}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export async function testPostFunction(req: Request, res: Response) {
  res.status(201).send('Post reached');
}
