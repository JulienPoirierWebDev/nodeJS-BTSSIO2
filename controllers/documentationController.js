const sendDocumentation = (request, response) => {
	// L'objet request contient toutes les données de la requête qui a été lancé par
	// un navigateur ou une autre API
	// L'object response contient tout le code qui nous permet de renvoyer une réponse

	response.json({
		'GET /articles': {
			description: 'Permet de voir tous les articles',
		},
		'POST /articles': {
			description: 'Permet de créer un article',
			body: {
				content: 'string',
				title: 'string',
				author: 'string',
			},
		},
	});
};

export default sendDocumentation;
