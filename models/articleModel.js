import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		author: String,
	},
	{ strict: false }
);

const Article = mongoose.model('article', articleSchema);

export default Article;
