import { Request, Response } from 'express';
import * as recipeService from '../services/recipeService';

export async function createRecipe(req: Request, res: Response) {
  const { title, image, portions, time, ingredients, method } = req.body;
  const { authorization } = req.headers;

  console.log(req.headers);
  await recipeService.createRecipe(
    title,
    image,
    portions,
    time,
    ingredients,
    method,
    authorization
  );
  res.sendStatus(201);
}

export async function getAllRecipes(req: Request, res: Response) {
  const data = await recipeService.getAllRecipes(req.headers.authorization);
  res.status(202).send(data);
}
