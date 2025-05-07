const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useCreateIndex: true,});

mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;
//var conn =mongoose.Collection;
var asdSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    use: String,

});

var asdModel = mongoose.model('asd', asdSchema);

module.exports = asdModel;
