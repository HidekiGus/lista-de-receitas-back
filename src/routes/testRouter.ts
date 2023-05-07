import { Router } from 'express';
import * as testController from '../controllers/testController';
import { validateSchema } from '../middlewares/validateSchema';

const testRouter = Router();

testRouter.post('/test', testController.testCreateRecipe);
testRouter.get('/test', testController.testPostFunction);

export default testRouter;
