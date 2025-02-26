import mongoose, { model } from 'mongoose';

const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	hashedPassword: String,
});

const User = mongoose.model('users', userSchema);

export default User;
