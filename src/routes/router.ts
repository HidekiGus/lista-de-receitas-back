import { Router } from 'express';
import likeRouter from './likeRouter';
import recipeRouter from './recipeRouter';
import userRouter from './userRouter';

const router = Router();

router.use(userRouter);
router.use(recipeRouter);
router.use(likeRouter);

export default router;
