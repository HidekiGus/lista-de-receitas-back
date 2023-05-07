//import client from '../database/database';

export async function createRecipe(
  title: string,
  image: string,
  portions: number,
  time: number,
  userId: number
) {
  const recipeExists = await findRecipeByUserIdAndTitle(userId, title);
  // if (recipeExists.length !== 0) {
  //   throw {
  //     type: 'alreadyExists',
  //     message:
  //       'There is already a recipe with this title created by this user. Change the title and try again!',
  //   };
  // }
  // const { id } = await client.recipes.create({
  //   data: {
  //     title,
  //     image,
  //     portions,
  //     time,
  //     userId,
  //   },
  // });
  // return id;
}

export async function createIngredient(ingredient: string, recipeId: any) {
  // await client.ingredients.create({
  //   data: {
  //     recipeId,
  //     description: ingredient,
  //   },
  // });
}

export async function createMethodStep(method: string, recipeId: any) {
  // await client.methodSteps.create({
  //   data: {
  //     recipeId,
  //     description: method,
  //   },
  // });
}

export async function findRecipeByUserIdAndTitle(
  userId: number,
  title: string
) {
  // return await client.recipes.findMany({
  //   where: {
  //     userId,
  //     title,
  //   },
  // });
}

export async function getAllRecipes() {
  // return await client.recipes.findMany({
  //   orderBy: {
  //     createdAt: 'desc',
  //   },
  // });
}

export async function getRecipeById(id: number) {
  // const ingredients = await client.ingredients.findMany({
  //   where: {
  //     recipeId: id,
  //   },
  //   orderBy: {
  //     createdAt: 'asc',
  //   },
  // });
  // const method = await client.methodSteps.findMany({
  //   where: {
  //     recipeId: id,
  //   },
  //   orderBy: {
  //     createdAt: 'asc',
  //   },
  // });
  // const recipeData = await client.recipes.findUnique({
  //   where: {
  //     id,
  //   },
  // });
  // return { ...recipeData, ingredients, method };
}

export async function getLikesByUserId(userId: any, recipeId: any) {
  // return await client.likes.findMany({
  //   where: {
  //     userId,
  //     recipeId,
  //   },
  // });
}
