import * as likeRepository from '../repositories/likeRepository';
import * as recipeRepository from '../repositories/recipeRepository';
import { resolveJWT } from '../utils/jwtResolver';

export async function likeRecipe(authorization: string, recipeId: number) {
  const userId = await resolveJWT(authorization);
  return await likeRepository.likeRecipe(userId, recipeId);
}

export async function getLikes(authorization: string) {
  const token = authorization.replace('Bearer ', '');
  const userId = await resolveJWT(token);
  const likedPosts = [];
  const likedPostsData = await likeRepository.getLikedPosts(Number(userId));
  for (let i = 0; i < likedPostsData.length; i++) {
    const recipeId = likedPostsData[i].recipeId;
    const likesData = await recipeRepository.getLikesByUserId(
      Number(userId),
      recipeId
    );
    // if (likesData.length !== 0) {
    //   likedPosts.push({ ...likedPostsData[i], isLiked: true });
    // } else {
    //   likedPosts.push({ ...likedPostsData[i], isLiked: false });
    // }
  }
  return likedPosts;
}
