import express from 'express';
import { createOneUser, getOneUser } from '../controllers/userController.js';
import idIsValid from '../middlewares/idIsValid.js';

const userRouter = express.Router();

userRouter.get('/:id', idIsValid, getOneUser);

userRouter.post('/', createOneUser);

export default userRouter;
