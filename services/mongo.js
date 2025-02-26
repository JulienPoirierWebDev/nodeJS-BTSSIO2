import mongoose from 'mongoose';

async function connectDB() {
	const mongooseURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@teachingcluster.rylpson.mongodb.net/articlesWebitech`;
	try {
		await mongoose.connect(mongooseURL);
		// on attent que la partie précédante soit terminée

		console.log('connexion terminée');
	} catch (error) {
		console.log('error');
		console.log(error);
	}
}

export default connectDB;
