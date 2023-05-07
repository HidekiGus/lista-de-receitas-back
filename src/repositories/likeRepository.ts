//import client from '../database/database';
import { getLikesByUserId } from './recipeRepository';

export async function likeRecipe(userId: number, recipeId: number) {
  const data = await getLikesByUserId(userId, recipeId);
  // if (data.length !== 0) {
  //   await client.likes.delete({
  //     where: {
  //       id: data[0].id,
  //     },
  //   });
  //   return false;
  // } else {
  //   await client.likes.create({
  //     data: {
  //       userId,
  //       recipeId,
  //     },
  //   });
  //   return true;
  // }
}

export async function getLikedPosts(userId: number) {
  // const likes = await client.likes.findMany({ where: { userId } });
  // const likedPosts = [];
  // for (let i = 0; i < likes.length; i++) {
  //   const recipeId = likes[i].recipeId;
  //   const data = await client.recipes.findUnique({ where: { id: recipeId } });
  //   likedPosts.push({ ...data, isLiked: true });
  // }
  // console.log(likedPosts);
  // return likedPosts;
  console.log('Testing in likeRepository');
  return null;
}
