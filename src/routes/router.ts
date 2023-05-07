import { Router } from 'express';
import likeRouter from './likeRouter';
import recipeRouter from './recipeRouter';
import testRouter from './testRouter';
import userRouter from './userRouter';

const router = Router();

router.use(testRouter);
router.use(userRouter);
router.use(recipeRouter);
router.use(likeRouter);

export default router;
