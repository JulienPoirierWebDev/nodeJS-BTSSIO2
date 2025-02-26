const notFound = (request, response) => {
	response.status(404).json({
		message: '404',
		error: true,
	});
};

export default notFound;
