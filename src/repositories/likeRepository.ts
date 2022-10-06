import client from '../database/database';
import { getLikesByUserId } from './recipeRepository';

export async function likeRecipe(userId: number, recipeId: number) {
  const data = await getLikesByUserId(userId, recipeId);
  if (data.length !== 0) {
    await client.likes.delete({
      where: {
        id: data[0].id,
      },
    });
    return false;
  } else {
    await client.likes.create({
      data: {
        userId,
        recipeId,
      },
    });
    return true;
  }
}
