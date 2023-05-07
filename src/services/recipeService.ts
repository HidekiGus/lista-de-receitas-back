import { resolveJWT } from '../utils/jwtResolver';
import * as recipeRepository from '../repositories/recipeRepository';

export async function createRecipe(
  title: string,
  image: string,
  portions: number,
  time: number,
  ingredients: string,
  method: string,
  authorization: string
) {
  const token = authorization.replace('Bearer ', '');
  const userId = await resolveJWT(token);
  const recipeId = await recipeRepository.createRecipe(
    title,
    image,
    Number(portions),
    Number(time),
    userId
  );

  const ingredientList = ingredients.split('\n');
  const methodList = method.split('\n');
  for (let i = 0; i < ingredientList.length; i++) {
    await recipeRepository.createIngredient(ingredientList[i], recipeId);
  }
  for (let m = 0; m < methodList.length; m++) {
    await recipeRepository.createMethodStep(methodList[m], recipeId);
  }
}

export async function getAllRecipes(authorization: string) {
  const userId = await resolveJWT(authorization);
  const data = await recipeRepository.getAllRecipes();
  const newArray = [];

  // for (let i = 0; i < data.length; i++) {
  //   const recipeId = data[i].id;
  //   const likesData = await recipeRepository.getLikesByUserId(userId, recipeId);
  //   // if (likesData.length !== 0) {
  //   newArray.push({ ...data[i], isLiked: true });
  // } else {
  //   newArray.push({ ...data[i], isLiked: false });
  // }
  //}

  return newArray;
}

export async function getRecipeById(
  id: number,
  authorization: string | undefined
) {
  const recipeData = await recipeRepository.getRecipeById(id);
  const token = authorization.replace('Bearer ', '');
  if (token === 'null') {
    return recipeData;
  } else {
    const userId = await resolveJWT(token);
    const likesData = await recipeRepository.getLikesByUserId(userId, id);
    //return { ...recipeData, isLiked: likesData.length !== 0 };
    return true;
  }
}
