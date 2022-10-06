import { resolveJWT } from '../utils/jwtResolver';
import * as recipeRepository from '../repositories/recipeRepository';

export async function createRecipe(
  title: string,
  image: string,
  portions: number,
  time: number,
  ingredients: string[],
  method: string[],
  authorization: string
) {
  const token = authorization.replace('Bearer ', '');
  const userId = await resolveJWT(token);
  const recipeId = await recipeRepository.createRecipe(
    title,
    image,
    portions,
    time,
    userId
  );
  for (let i = 0; i < ingredients.length; i++) {
    await recipeRepository.createIngredient(ingredients[i], recipeId);
  }
  for (let m = 0; m < method.length; m++) {
    await recipeRepository.createMethodStep(method[m], recipeId);
  }
}

export async function getAllRecipes(authorization: string) {
  const userId = await resolveJWT(authorization);
  const data = await recipeRepository.getAllRecipes();
  const newArray = [];

  for (let i = 0; i < data.length; i++) {
    const recipeId = data[i].id;
    const likesData = await recipeRepository.getLikesByUserId(userId, recipeId);
    if (likesData.length !== 0) {
      newArray.push({ ...data[i], isLiked: true });
    } else {
      newArray.push({ ...data[i], isLiked: false });
    }
  }

  return newArray;
}
