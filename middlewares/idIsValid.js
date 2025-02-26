import mongoose from 'mongoose';

const idIsValid = (request, response, next) => {
	const id = request.params.id;

	const idIsValid = mongoose.Types.ObjectId.isValid(id);

	if (!idIsValid) {
		response.status(404).json({ error: true, message: 'id non valide' });

		return;
	}

	next();
};

export default idIsValid;
