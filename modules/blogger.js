const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;

var bloggerSchema = new mongoose.Schema({
	title: String,
	username: String,
	description: String,
	artical: String,
	image: String,
});

var bloggerModel = mongoose.model('blogger', bloggerSchema);
module.exports = bloggerModel;