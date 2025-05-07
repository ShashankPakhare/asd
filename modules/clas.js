const mongoose = require('mongoose');
const { stringify } = require('node:querystring');
mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;

var clasSchema = new mongoose.Schema({
  Teacher: String,
  Time: String,
  Subject: String,
  meetlink: String,

});

var clasModel = mongoose.model('clas', clasSchema);
module.exports = clasModel;