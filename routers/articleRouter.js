import express from 'express';
import {
	createOneArticle,
	deleteOneArticle,
	getAllArticles,
	getOneArticle,
	patchOneArticle,
} from '../controllers/articleController.js';
import idIsValid from '../middlewares/idIsValid.js';

const articleRouter = express.Router();

// CREATE
articleRouter.post('/articles', createOneArticle);

//READ -> all
articleRouter.get('/articles', getAllArticles);

//READ ->  one
articleRouter.get('/articles/:id', idIsValid, getOneArticle);

//UPDATE
articleRouter.patch('/articles/:id', idIsValid, patchOneArticle);

//DELETE
articleRouter.delete('/articles/:id', idIsValid, deleteOneArticle);

export default articleRouter;
