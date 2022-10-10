import { Router } from 'express';
import * as likeController from '../controllers/likeController';

const likeRouter = Router();

likeRouter.post('/like/:recipeId', likeController.likeRecipe);
likeRouter.get('/likes', likeController.getLikes);

export default likeRouter;
