import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import connectDB from './services/mongo.js';
import notFound from './middlewares/404.js';
import sendDocumentation from './controllers/documentationController.js';

import articleRouter from './routers/articleRouter.js';
import userRouter from './routers/userRouter.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.get('/', sendDocumentation);

app.use('/articles', articleRouter);
app.use('/users', userRouter);

app.use(notFound);

app.listen(PORT, (error) => {
	if (error) {
		console.log('oupsy');
		return;
	}

	console.log(`Serveur lancé sur le port ${PORT}`);
});
