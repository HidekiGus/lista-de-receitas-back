import { Router } from 'express';
import { getUsers } from '../controllers/userController';
import { validateSchema } from '../middlewares/validateSchema';
import * as userController from '../controllers/userController';
import { newUserSchema } from '../schemas/newUserSchema';
import { userSchema } from '../schemas/userSchema';

const userRouter = Router();

userRouter.post(
  '/signup',
  validateSchema(newUserSchema),
  userController.createUser
);
userRouter.post('/login', validateSchema(userSchema), userController.login);
userRouter.get('/', userController.getStatusCheck);
//#TODO:
userRouter.get('/users', getUsers);

export default userRouter;
