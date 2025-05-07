const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;

var cartSchema = new mongoose.Schema({
  username: String,
  title: String,
  projectid: String,
  price: Number,
  image: String,

});

var cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;