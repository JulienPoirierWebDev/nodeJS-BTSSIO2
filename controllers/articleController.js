import Article from '../models/articleModel.js';

const createOneArticle = async (request, response) => {
	try {
		const newArticle = new Article(request.body);
		await newArticle.save();

		response.status(201).json({
			message: 'Article crée',
			article: newArticle,
		});
	} catch (error) {
		response.status(500).json({
			message: 'Notre API ne fonctionne pas.',
			error: true,
		});
	}
};

const getAllArticles = async (request, response) => {
	try {
		const allArticles = await Article.find();
		response.json({
			message: 'Vous êtes sur la requete READ ALL de ARTICLES',
			allArticles,
		});
	} catch (error) {
		response.status(500).json({
			message: 'Notre API ne fonctionne pas.',
			error: true,
		});
	}
};

const getOneArticle = async (request, response) => {
	try {
		const id = request.params.id;

		const oneArticle = await Article.findById(id);

		if (!oneArticle) {
			response.status(404).json({
				error: true,
				message: "Il n'y a pas d'article avec cet id",
			});

			return;
		}

		response.json({
			article: oneArticle,
			message: 'Vous êtes sur la requete READ ONE de ARTICLES',
		});
	} catch (error) {
		console.log(error);

		response.status(500).json({
			message: 'Notre API ne fonctionne pas.',
			error: true,
		});
	}
};

const patchOneArticle = async (request, response) => {
	try {
		const id = request.params.id;

		const elementsToModify = request.body;

		const oneArticle = await Article.findById(id);

		if (!oneArticle) {
			response.status(404).json({
				error: true,
				message: "Il n'y a pas d'article avec cet id",
			});

			return;
		}

		await oneArticle.updateOne(elementsToModify);

		response.json({
			message: "L'élement a été modifié",
		});
	} catch (error) {
		console.log(error);

		response.status(500).json({
			message: 'Notre API ne fonctionne pas.',
			error: true,
		});
	}
};

const deleteOneArticle = async (request, response) => {
	try {
		const id = request.params.id;

		await Article.findByIdAndDelete(id);

		response.json({
			message: "L'élement a été supprimé",
		});
	} catch (error) {
		console.log(error);

		response.status(500).json({
			message: 'Notre API ne fonctionne pas.',
			error: true,
		});
	}
};

export {
	createOneArticle,
	getAllArticles,
	getOneArticle,
	patchOneArticle,
	deleteOneArticle,
};
