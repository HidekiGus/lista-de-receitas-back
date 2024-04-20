import { connectToDatabase, Kitten } from '../database/database';

/* export async function createRecipe(
  title: string,
  image: string,
  portions: number,
  time: number,
  userId: number
) {
  const recipeExists = await findRecipeByUserIdAndTitle(userId, title);
  if (recipeExists.length !== 0) {
    throw {
      type: 'alreadyExists',
      message:
        'There is already a recipe with this title created by this user. Change the title and try again!',
    };
  }
  const { id } = await client.recipes.create({
    data: {
      title,
      image,
      portions,
      time,
      userId,
    },
  });
  return id;
} */

export async function createRecipe(
  title: string,
  image: string,
  portions: number,
  time: number,
  userId: number
) {
  console.log(title, image, portions, time, userId);
  return true;
}

/* export async function createIngredient(ingredient: string, recipeId: number) {
  await client.ingredients.create({
    data: {
      recipeId,
      description: ingredient,
    },
  });
} */

export async function createIngredient() {
  console.log("createIngredient pass");
  return true;
}

/* export async function createMethodStep(method: string, recipeId: number) {
  await client.methodSteps.create({
    data: {
      recipeId,
      description: method,
    },
  });
} */

export async function createMethodStep() {
  console.log("createMethodStep pass");
  return true;
}

/* export async function findRecipeByUserIdAndTitle(
  userId: number,
  title: string
) {
  return await client.recipes.findMany({
    where: {
      userId,
      title,
    },
  });
} */

export async function findRecipeByUserIdAndTitle() {
  console.log("findRecipeByUserIdAndTitle pass");
  return true;
}

/* export async function getAllRecipes() {
  return await client.recipes.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
} */

export async function getAllRecipes() {
  console.log("getAllRecipes pass");
  return true;
}

/* export async function getRecipeById(id: number) {
  const ingredients = await client.ingredients.findMany({
    where: {
      recipeId: id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
  const method = await client.methodSteps.findMany({
    where: {
      recipeId: id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
  const recipeData = await client.recipes.findUnique({
    where: {
      id,
    },
  });
  return { ...recipeData, ingredients, method };
} */

export async function getRecipeById() {
  console.log("getRecipeById pass");
  return true;
}

/* export async function getLikesByUserId(userId: number, recipeId: number) {
  return await client.likes.findMany({
    where: {
      userId,
      recipeId,
    },
  });
}
 */

export async function getLikesByUserId() {
  console.log("getLikesByUserId pass");
  return true;
}