const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;

var buyerSchema = new mongoose.Schema({
  username: String,
  title: String,
  projectid: String,
  price: Number,
  image: String,

});

var buyerModel = mongoose.model('buyer', buyerSchema);
module.exports = buyerModel;