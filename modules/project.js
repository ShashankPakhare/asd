const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;

var projectSchema = new mongoose.Schema({
    index: String,
    id: String,
    username: String,
    title: String,
    projecttype: String,
    shortd: String,
    price: Number,
    description: String,
    image: String,
});

var projectModel = mongoose.model('project', projectSchema);
module.exports = projectModel;