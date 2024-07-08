import { connectToDatabase, Kitten, Recipe } from '../database/database';
import mongoose from 'mongoose';

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
  ingredientList: string[],
  methodList: string[],
  portions: number,
  time: number,
  utensils: string[],
  userId: string
) {
  await connectToDatabase();

  const newRecipe = new Recipe({
    title,
    image, 
    ingredients: ingredientList, 
    method: methodList, 
    portions, 
    time, 
    utensils, 
    userId
  })
  await newRecipe.save();

  const savedRecipeId = newRecipe._id;

  mongoose.connection.close();
  return savedRecipeId;
}

export async function get20MostRecentRecipes() {
  await connectToDatabase();
  try {
    const recipes = await Recipe.find()
      .sort({ createdAt: -1 }) // Sort by createdAt field in descending order (most recent first)
      .limit(20); // Limit the result to 20 recipes
    console.log('Most recent recipes:', recipes);
    return recipes; // Return the retrieved recipes
  } catch (err) {
    console.error('Error retrieving recipes:', err);
    return []; // Return an empty array in case of an error
  }
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

/* export async function getRecipeById(id: string) {
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

export async function getRecipeById(id: string) {
  await connectToDatabase();

  try{
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      throw new Error('Receita não encontrada');
    }

    console.log('Recipe found:', recipe.title);
    return recipe;
  } catch(err) {
    console.error('Error retrieving recipe:', err);
    return null;
  }
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