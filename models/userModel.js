import mongoose, { model } from 'mongoose';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	hashedPassword: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: 'user',
	},
});

const User = mongoose.model('users', userSchema);

export default User;
