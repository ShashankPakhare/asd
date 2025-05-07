const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useCreateIndex: true,});

mongoose.connect('mongodb+srv://shashankpakhare001:KJLyEJ7z2PW8Lm0f@cluster0.uq83wib.mongodb.net/Shashank?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
var conn = mongoose.connection;

//var conn =mongoose.Collection;

var employeeSchema = new mongoose.Schema({
    name: String,
    time: String,
    subject: String,
    meetlink: String,
});

var employeeModel = mongoose.model('Employee', employeeSchema);

module.exports = employeeModel;