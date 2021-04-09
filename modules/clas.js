const mongoose = require('mongoose');
const { stringify } = require('node:querystring');
mongoose.connect('mongodb+srv://new-Shashank:ShAsHaNk@cluster0.loytd.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn=mongoose.connection;

var clasSchema =new mongoose.Schema({
  Teacher:String,
  Time:String,
  Subject:String,
  meetlink:String,

});

var clasModel = mongoose.model('clas', clasSchema);
module.exports=clasModel;