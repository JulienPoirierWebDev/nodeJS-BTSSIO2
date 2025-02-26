import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

const createOneUser = async (request, response) => {
	const { email, name, password } = request.body;

	if (!email || !name || !password) {
		response.status(400).json({
			error: true,
			message:
				'Il est nécessaire de fournir un email, un nom et un mot de passe',
		});
		return;
	}

	const hashedPassword = await bcrypt.hash(password, 12);

	try {
		const newUser = new User({ email, hashedPassword, name });

		await newUser.save();

		// TODO : créer token JWT pour éviter a l'utilisateur de devoir se connecté après la création du profil.

		response.status(201).json({
			message: 'Utilisateur crée avec succès',
		});
	} catch (error) {
		response.status(500).json({
			error: true,
			message: 'Problème avec le serveur',
		});
	}
};

const getOneUser = async (request, response) => {
	const id = request.params.id;

	try {
		const user = await User.findById(id);

		if (!user) {
			response.status(404).json({
				error: true,
				message: 'Utilisateur non trouvé',
			});

			return;
		}

		response.json({
			message: 'Utilisateur trouvé',
			user: {
				name: user.name,
				email: user.email,
			},
		});
	} catch (error) {
		response.status(500).json({
			error: true,
			message: 'Problème avec le serveur',
		});
	}
};

export { createOneUser, getOneUser };
