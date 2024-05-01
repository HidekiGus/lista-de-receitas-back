import { resolveJWT } from '../utils/jwtResolver';
import * as recipeRepository from '../repositories/recipeRepository';

export async function createRecipe(
  title: string,
  image: string,
  ingredients: string,
  method: string,
  portions: number,
  time: number,
  utensils: string[],
  userId: string
  //authorization: string
) {
  //const token = authorization.replace('Bearer ', '');
  //const userId = await resolveJWT(token);
  
  const ingredientList = ingredients.split('\n');
  const methodList = method.split('\n');
  const newRecipeId = await recipeRepository.createRecipe(
    title,
    image,
    ingredientList,
    methodList,
    Number(portions),
    Number(time),
    utensils,
    userId
  );

  return newRecipeId;
}

/* export async function getAllRecipes(authorization: string) {
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
} */

export async function getAllRecipes() {
  console.log("getAllRecipes pass");
  const data = await recipeRepository.get20MostRecentRecipes();
  return data;
}

/* export async function getRecipeById(
  id: number,
  authorization: string | undefined
) {
  const recipeData = await recipeRepository.getRecipeById(id);
  console.log("passou aqui");
  const token = authorization.replace('Bearer ', '');
  if (token === 'null') {
    return recipeData;
  } else {
    const userId = await resolveJWT(token);
    const likesData = await recipeRepository.getLikesByUserId(userId, id);
    return { ...recipeData, isLiked: likesData.length !== 0 };
  }
} */

export async function getRecipeById() {
  console.log("getRecipeById pass");
  return true;
}