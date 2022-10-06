import * as likeRepository from '../repositories/likeRepository';
import { resolveJWT } from '../utils/jwtResolver';

export async function likeRecipe(authorization: string, recipeId: number) {
  const userId = await resolveJWT(authorization);
  return await likeRepository.likeRecipe(userId, recipeId);
}
