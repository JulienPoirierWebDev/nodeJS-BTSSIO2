import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (request, response) => {
	try {
		const { email, password } = request.body;

		const user = await User.findOne({ email: email }).exec();

		if (!user) {
			response.status(404).json({
				error: true,
				message: 'Veuillez vérifier le couple email/password',
			});
		}
		console.log(password, user, user.hashedPassword);

		const passwordMatch = await bcrypt.compare(
			password,
			user.hashedPassword
		);

		if (!passwordMatch) {
			response.status(404).json({
				error: true,
				message: 'Veuillez vérifier le couple email/password',
			});
		}

		const token = jwt.sign({ id: user._id }, process.env.SECRET);

		response.json({
			token: token,
			message: 'Bravo, vous êtes connecté !',
		});
	} catch (error) {
		console.log(error);

		response
			.status(500)
			.json({ error: true, message: 'Problème coté serveur' });
	}
};

export { login };
